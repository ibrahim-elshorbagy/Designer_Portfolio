import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Show = ({ auth, project }) => {
    //for adding class to project description As Tailwind Clear it
    useEffect(() => {
        const applyTailwindClasses = () => {
            // Get the container element
            const container = document.querySelector(".inside");

            // Check if container exists
            if (container) {
                // Define Tailwind CSS classes as separate tokens
                const elementClasses = {
                    H1: ["text-3xl", "font-bold", "mb-4"], // Example for h1
                    H2: ["text-2xl", "font-bold", "mb-3"], // Example for h2
                    H3: ["text-xl", "font-bold", "mb-2"], // Example for h3
                    H4: ["text-lg", "font-bold", "mb-2"], // Example for h4
                    H5: ["text-base", "font-bold", "mb-2"], // Example for h5
                    H6: ["text-sm", "font-bold", "mb-2"], // Example for h6
                    P: ["mb-4"], // Example for p
                    UL: ["list-disc", "pl-4", "mb-4"], // Example for ul
                    OL: ["list-decimal", "pl-4", "mb-4"], // Example for ol
                    IFRAME: ['w-full', 'h-svh' ,'border-2' ,'border-gray-200', 'rounded-lg'], // Example for iframe
                    HR: ["my-4", "border-t", "border-gray-200"], // Example for hr
                };


                // Select all elements inside the container
                const elements = container.querySelectorAll("*");

                // Apply Tailwind CSS classes to each element
                elements.forEach((element) => {
                    const tagName = element.tagName.toUpperCase();
                    if (elementClasses[tagName]) {
                        elementClasses[tagName].forEach((className) => {
                            element.classList.add(className);
                        });
                    }
                });
            }
        };

        applyTailwindClasses();
    }, [project.description]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {`Project ${project.name}`}
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
            {JSON.stringify(project)}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="h-1/2">
                            <img
                                src={project.cover_image}
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6 text-gray-900">
                            <div
                                className="mt-1 text-center inside"
                                dangerouslySetInnerHTML={{
                                    __html: project.description,
                                }}
                            />
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
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
