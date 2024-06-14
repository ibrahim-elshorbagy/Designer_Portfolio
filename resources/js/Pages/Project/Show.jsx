import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, project }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        {`Project "${project.name}"`}
                    </h2>
                    <Link
                        href={route("project.edit", project.id)}
                        className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600"
                    >
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`Project "${project.name}"`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {JSON.stringify(project)}
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div>
                            <img
                                src={project.image_path[0]}
                                alt=""
                                className="object-cover w-full h-64"
                            />
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="gap-4 mt-4 columns-1 sm:columns-2 lg:columns-3">
                                {project.image_path.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative mb-4 break-inside-avoid"
                                    >

                                        <img
                                            className="w-full h-auto rounded-lg"
                                            src={image}
                                            alt={image.name}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-1 mt-2">
                                <div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">
                                            Project Name
                                        </label>
                                        <p className="mt-1">{project.name}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-lg font-bold">
                                            Created By
                                        </label>
                                        <p className="mt-1"></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">
                                            Create Date
                                        </label>
                                        <p className="mt-1">
                                            {project.created_at}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="text-lg font-bold">
                                    Project Description
                                </label>
                                <p className="mt-1">{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
