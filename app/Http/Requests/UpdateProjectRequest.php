<?php

namespace App\Http\Requests;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'images' => ['required', 'array'],
            'category' => ['required', Rule::in(['brand', 'Graphic Design', 'Motion Graphic'])],
            'cover_image' => ['required'],
            'cover_image_new' => [],
            'behance_link' => ['required', 'url'],
            'intro_link' => ['nullable', 'url'],

            // 'images.*' => ['required'],
            // 'images.*' => ['regex:/\.(jpg|jpeg|png|gif)$/i' ,'image'],

        ];
    }
}
