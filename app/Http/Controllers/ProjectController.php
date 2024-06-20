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

        $cover_image = $data['cover_image'] ?? null;

        if($cover_image)
        {
            $data['cover_path'] = $cover_image->store($imageFolder .'/cover', 'public');
        }

        $imagePaths = [];


            foreach ($data['images'] as $image) {

                $path = $image->store($imageFolder, 'public');

                $imagePaths[] = $path;
            }


        $data['image_path'] = json_encode($imagePaths, true);

        unset($data['images']);
        unset($data['cover_image']);

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


     // Intro link ------------------------------------------------------

        $intro_link = $data['intro_link'] ?? null;
        if(isset($intro_link))
        {
            $project['intro_link'] = $intro_link;
        }

        if($intro_link === null)
        {
            $project['intro_link'] = NULL;
        }

        $project->save();



     // Behance link ------------------------------------------------------

        $behance_link = $data['behance_link'] ?? null;
        if(isset($behance_link))
        {
            $project['behance_link'] = $behance_link;
        }
        $project->save();

    // Cover Image ------------------------------------------------------

        $cover_image_new = $data['cover_image_new'] ?? null;

        if(isset($cover_image_new))
        {
            if($project->cover_path)
            {
                Storage::disk('public')->deleteDirectory(dirname($project->cover_path));
            }
            $cover_path = 'project/' .$project->slug.'/cover';
            $project['cover_path'] = $cover_image_new->store($cover_path,'public');
        }
        $project->save();


    // Caegory ------------------------------------------------------

        $category = $data['category'] ?? null;
        if(isset($category))
        {
            $project['category'] = $category;
        }
        $project->save();

    // Start slug change ------------------------------------------------------

    // Start slug change ------------------------------------------------------

    $oldSlug = $project->slug;
    $newSlug = Str::slug($data['name']);

    if ($newSlug !== $oldSlug) {

        $oldImageFolder = 'public/project/' . $oldSlug;
        $newImageFolder = 'public/project/' . $newSlug;

        Storage::move($oldImageFolder, $newImageFolder);

        $imageFolder = 'project/' . $newSlug;
        $data['slug'] = $newSlug;

    } else {
        // Slug hasn't changed, use existing folder
        $imageFolder = 'project/' . $oldSlug;
        $data['slug'] = $oldSlug;
    }

    $paths=json_decode($project['image_path'],true);
    $project['name'] = $data['name'];
    $project['slug'] = $data['slug'];

    $newPaths = array_map(function($path) use ($project) {
    return preg_replace('/[^\/]+(?=\/[^\/]+$)/', $project['slug'], $path);
    }, $paths);

    $project['image_path'] = json_encode($newPaths);
    $project->save();

    //End slug change ------------------------------------------------------

    //Start image upload and Delete of image //There is Two status    ------------------------------------------------------------------------------------------

    $imagePaths =  $data['images'];



        foreach ($imagePaths as $image) { //First New images
            if ($image instanceof \Illuminate\Http\UploadedFile) { // Handle the UploadedFile object

                $path = $image->store($imageFolder, 'public');
                $newpaths = json_decode($project['image_path'], true) ?? [];
                $newpaths[] = $path;
                $project['image_path'] = json_encode($newpaths);
                $project->save();

            }
            else //Second delete images
            {
                // Find the difference
                $currentPaths = json_decode($project['image_path'], true) ?? []; //get paths from database
                $filenames1 = array_map(fn($path) => basename($path), $currentPaths); //from database


                if(is_array($imagePaths[0])){
                $filenames2 = array_map(fn($path) => basename($path), $imagePaths[0]); //if there is upladed image and delete image
                }
                else{

                $filenames2 = array_map(fn($path) => basename($path), $imagePaths); //if there is just image delete
                }

                $difference = array_diff($filenames1,$filenames2);

                    foreach ($difference as $path)
                    {
                        $fullPath = 'project/' . $project['slug'] . '/' . $path;
                        Storage::disk('public')->delete($fullPath); //delete from storage
                        foreach ($currentPaths as $key => $value) { //delete from database

                            if ($value === $fullPath) {

                                unset($currentPaths[$key]);
                            }
                        }

                    }

                $project['image_path'] = json_encode($currentPaths);
                $project->save();

            }



    }
    $project['description'] = $data['description'];
            $project->save();
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
