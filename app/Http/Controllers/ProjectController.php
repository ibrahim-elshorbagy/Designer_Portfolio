<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query();
        $sortFileds = request('sort_field','created_at');
        $sortDirection = request('sort_direction','desc');

        if(request('name')){
            $query->where('name', 'like', '%' . request('name') . '%');
        }
        if(request('status')){
            $query->where('status','like',"%".request('status')."%");
        }

        $projects = $query->orderBy($sortFileds,$sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Project/Index', [
            'projects' => ProjectResource::collection($projects),
            'queryParams' => request()->query() ?: null,
            'success'=>session('success')
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia('Project/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();

        $data['slug'] = Str::slug($data['name']);

        $imageFolder = 'project/' . $data['slug'];

        $imagePaths = [];


            foreach ($data['images'] as $image) {

                $path = $image->store($imageFolder, 'public');

                $imagePaths[] = $path;
            }


        $data['image_path'] = json_encode($imagePaths);

        unset($data['images']);

        Project::create($data);
        return to_route('project.index')
            ->with('success', "Project Created successfully");
    }


    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {


        return inertia('Project/Show',[
            'project'=> new ProjectResource($project),

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {

        return inertia('Project/Edit',[
            'project'=>new ProjectResource($project)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
public function update(UpdateProjectRequest $request, Project $project)
{
    $data = $request->validated();

    //Start slug change ------------------

    $oldSlug = $project->slug;
    $newSlug = Str::slug($data['name']);

    if ($newSlug !== $oldSlug) {

        // Update the slug in the data array
        $data['slug'] = $newSlug;

        // Rename the folder for old images to new slug
        $oldImageFolder = 'project/' . $oldSlug;
        $newImageFolder = 'public/project/' . $newSlug;

        // Create new folder for new slug and delete old
        Storage::makeDirectory($newImageFolder);
        Storage::deleteDirectory($oldImageFolder);
        Storage::move($oldImageFolder, $newImageFolder);

        $imageFolder = 'project/' . $newSlug;
        $data['slug'] = $newSlug;

    } else {
        // Slug hasn't changed, use existing folder
        $imageFolder = 'project/' . $oldSlug;
        $data['slug'] = $oldSlug;
    }

    //End slug change------------------


    //adding image to Data[]
    $imagePaths = json_decode($project['image_path']);

    if (is_array($data['images'][0])){//if first element array that's mean the second element is new image


    unset($data['images'][0]);

    foreach ($data['images'] as $image) {

        $path = $image->store($imageFolder, 'public'); //error on updaing just slug

        $imagePaths[] = $path;

    }}



    //Updating
    unset($data['images']);
    $data['image_path'] = json_encode($imagePaths);
    $project->update($data);


    return redirect()->route('project.index')
                    ->with('success', "Project Updated Successfully");
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
         if($project->image_path)
            {
                Storage::disk('public')->deleteDirectory(dirname($project->image_path));
            }
        return to_route('project.index')->with('success','Project deleted successfully');
    }
}
