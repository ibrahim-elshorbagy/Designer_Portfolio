import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { HiOutlineExternalLink } from "react-icons/hi";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

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
                    H1: ["text-3xl", "font-bold", "mb-4"],
                    H2: ["text-2xl", "font-bold", "mb-3"],
                    H3: ["text-xl", "font-bold", "mb-2"],
                    H4: ["text-lg", "font-bold", "mb-2"],
                    H5: ["text-base", "font-bold", "mb-2"],
                    H6: ["text-sm", "font-bold", "mb-2"],
                    P: ["mb-4"],
                    UL: ["list-disc", "pl-4", "mb-4"],
                    OL: ["list-decimal", "pl-4", "mb-4"],
                    IFRAME: ['w-full', 'h-svh' ,'border-2' ,'border-gray-200', 'rounded-lg'],
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
        <GuestLayout
            user={auth.user}
            header={
                <div className="relative flex flex-col items-center">
                    <h2 className="pb-2 mb-4 text-2xl font-semibold leading-tight text-gray-800 border-b-2 border-gray-200">
                        {`${project.name}`}
                    </h2>

                    {auth.user && (
                        <Link
                            href={route("project.edit", project.id)}
                            className="absolute right-0 px-3 py-1 text-white transition-all rounded shadow bottom-6 bg-emerald-500 hover:bg-emerald-600"
                        >
                            Edit
                        </Link>
                    )}
                </div>
            }
        >
            <Head title={`Project "${project.name}"`} />
            <div>
                <div className="container pb-10 mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white sm:rounded-lg">
                        {/* Cover Image */}
                        <div>
                            <div className="h-1/2">
                                <img
                                    src={project.cover_image}
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/*  Description */}
                        <div className="p-6 text-gray-900">
                            <div
                                className="mt-1 text-center inside"
                                dangerouslySetInnerHTML={{
                                    __html: project.description,
                                }}
                            />
                        </div>
                        {/* Intro Video */}
                        {  (
                            <div className="w-full h-96  md:h-[500px] lg:h-[600px] xl:h-[800px]">
                                <div className="flex items-center justify-center h-full">
                                    <iframe
                                        src={project.intro_link}
                                        className="w-full h-full rounded-lg shadow-lg"
                                        title="Project Introduction"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}
                        <br />
                        {/* Images */}
                        <div className="w-full mt-16 md:mt-32 lg:mt-48 xl:mt-[200px] h-1/2">
                            <Slide
                                duration={2000}
                                transitionDuration={500}
                                indicators={false}
                                className="w-full"
                            >
                                {project.image_path.map((image, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center"
                                    >
                                        <img
                                            src={image}
                                            alt={`Slide ${index}`}
                                            className="object-contain w-full h-64 md:h-80 lg:h-96 xl:h-full"
                                        />
                                    </div>
                                ))}
                            </Slide>
                        </div>

                        {/*  Behance link */}
                        <div className="flex flex-col items-center mt-5 sm:flex-row sm:justify-center">
                            <a
                                href={project.behance_link}
                                className="flex items-center gap-2 px-4 py-2 my-2 font-bold text-white bg-blue-500 rounded sm:my-10 pointer hover:bg-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HiOutlineExternalLink className="w-4 h-4" />
                                See The Full Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Show;
