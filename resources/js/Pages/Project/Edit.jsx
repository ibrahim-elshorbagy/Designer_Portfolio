import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Create({ auth, project }) {


   const modules = {
       toolbar: [
           [
               { header: "1" },
               { header: "2" },
               { header: "3" },
               { header: "4" },
               { font: [] },
           ],
           [{ size: [] }],
           ["bold", "italic", "underline", "strike"],
           ["link", "image", "video"],
           [{ list: "bullet" }],
           [{ list: "ordered" }],
           ["clean"],
       ],
       clipboard: {
           matchVisual: false,
       },
   };

   const formats = [
       "header",
       "font",
       "size",
       "bold",
       "italic",
       "underline",
       "strike",
       "list",
       "bullet",
       "ordered",
       "link",
       "image",
       "video",
       "clean",
   ];

    const { data, setData, post, errors } = useForm({
        images: project.image_path || [],
        name: project.name || '',
        description: project.description || '' ,
        _method: "PUT",
    });

    const [images, setImages] = useState([...data.images]);

    const onFileSelect = (event) => {

        const files = event.target.files;

        if (files.length === 0) return;

        for (let i = 0; i < files.length; i++) {
            setImages((prevImages) => [
                ...prevImages,
                {
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                },
            ]);
        }

        setData("images", [images, ...files]);
    };

    function deleteImage(index)
    {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        const newImageFiles = [...data.images];
        newImageFiles.splice(index, 1); // Remove the file at the specified index
        setData("images", newImageFiles);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        post(route("project.update", project.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 ">
                        Edit Project " {project.name} "
                    </h2>
                </div>
            }
        >
            <Head title="Project " />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="text-black bg-white border border-gray-200 rounded-lg shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 bg-white shadow sm:p-8 sm:rounded-lg"
                        >
                            {JSON.stringify(errors)}

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_name"
                                    value="Project Name"
                                />

                                <TextInput
                                    id="project_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="block w-full mt-1"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_description"
                                    value="Project Description"
                                />

                                <ReactQuill
                                    className="h-96 "
                                    modules={modules}
                                    formats={formats}
                                    value={data.description}
                                    onChange={(value) =>
                                        setData("description", value)
                                    }
                                />
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>

                            <div className="p-10 mt-4 ">
                                <div className="my-4 text-center">
                                    <p className="text-lg font-semibold text-gray-700 ">
                                        Images Uploading
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 mt-2 transition-colors duration-200 ease-in-out border-2 border-gray-300 border-dashed rounded-md bg-gray-50 hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center">
                                        <svg
                                            className="w-10 h-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                            />
                                        </svg>
                                        <p className="mt-2 text-sm text-gray-600 ">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                    </div>
                                    <label
                                        htmlFor="project_image_path"
                                        className="mt-4 cursor-pointer"
                                    >
                                        <span className="px-4 py-2 font-semibold text-white transition-colors duration-200 ease-in-out bg-blue-600 rounded-md shadow-md hover:bg-blue-700">
                                            Upload Files
                                        </span>
                                    </label>
                                    <input
                                        id="project_image_path"
                                        type="file"
                                        name="image"
                                        multiple
                                        accept="image/*"
                                        className="hidden"
                                        onChange={onFileSelect}
                                    />
                                </div>

                                <div className="mt-4 xl">
                                    <InputError
                                        message={
                                            errors["images.0"] || errors.images
                                        }
                                        className="mt-2"
                                    />
                                </div>

                                <div className="gap-4 mt-4 columns-1 sm:columns-2 lg:columns-3">
                                    {images &&
                                        images.map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative mb-4 break-inside-avoid"
                                            >
                                                <span
                                                    className="absolute text-3xl font-bold text-red-500 cursor-pointer top-3 left-3"
                                                    onClick={() =>
                                                        deleteImage(index)
                                                    }
                                                >
                                                    &times;
                                                </span>
                                                <img
                                                    className="w-full h-auto rounded-lg"
                                                    src={
                                                        typeof image ===
                                                        "string"
                                                            ? image
                                                            : image.url
                                                    }
                                                    alt={
                                                        typeof image ===
                                                        "string"
                                                            ? image
                                                            : image.url
                                                    }
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className="mt-4 text-right">
                                <Link
                                    href={route("project.index")}
                                    className="px-3 py-1 mr-2 text-gray-800 transition-all bg-gray-100 rounded shadow hover:bg-gray-200"
                                >
                                    Cancel
                                </Link>
                                <button className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
