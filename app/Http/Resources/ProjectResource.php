<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProjectResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'category' => $this->category,
            'description' => $this->description,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d'),
            'image_path' => collect(json_decode($this->image_path))->map(function($path) {
                return Storage::url($path);
            })->all(),
            'cover_image' => $this->cover_path && !(str_starts_with($this->cover_path, 'http')) ?
                Storage::url($this->cover_path) : $this->cover_path,
            'behance_link' =>$this->behance_link,
            'intro_link' =>$this->intro_link,

        ];
    }
}
