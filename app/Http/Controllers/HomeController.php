<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {

        return inertia('Dashboard', [
        'projects' => Project::select('id', 'name', 'slug', 'category', 'cover_path','intro_link')
            ->get()
            ->groupBy('category') // Group projects by category
            ->map(function ($group) {
                return $group->take(4)->map(function ($project) {
                    $project['cover_path'] = $project->cover_path && !(str_starts_with($project->cover_path, 'http')) ?
                        Storage::url($project->cover_path) : $project->cover_path;
                    return $project;
                });
            })
            ->collapse()

    ]);

    }

    public function gallary()
    {

        return inertia('Gallary', [
        'projects' => Project::select('id', 'name', 'slug', 'category', 'cover_path','intro_link')
            ->get()
            ->groupBy('category') // Group projects by category
            ->map(function ($group) {
                return $group->map(function ($project) {
                    $project['cover_path'] = $project->cover_path && !(str_starts_with($project->cover_path, 'http')) ?
                        Storage::url($project->cover_path) : $project->cover_path;
                    return $project;
                });
            })
            ->collapse()

    ]);

    }
}
