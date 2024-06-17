import React from "react";

const MyProjects = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-40 lg:pb-48">
                <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 ">
                            See My Projects
                        </h1>
                        <p className="mt-4 text-lg text-gray-500">
                            Explore some of my latest{" "}
                            <span className="font-bold">web development</span>,
                            <span className="font-bold">
                                {" "}
                                software engineering
                            </span>
                            , and more. Feel free to click through and learn
                            more about each project.
                        </p>
                    </div>
                    <div className="mt-8 sm:mt-10 lg:mt-12">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div className="flex items-center space-x-4 lg:space-x-6">
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-6">
                                        <div className="w-32 overflow-hidden rounded-lg h-36 sm:h-44 sm:w-44">
                                            <img
                                                src="images/pic.jpg"
                                                alt=""
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <div className="w-32 overflow-hidden rounded-lg h-36 sm:h-44 sm:w-44">
                                            <img
                                                src="images/pic.jpg"
                                                alt=""
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-6">
                                        <div className="w-32 overflow-hidden rounded-lg h-36 sm:h-44 sm:w-44">
                                            <img
                                                src="images/pic.jpg"
                                                alt=""
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <div className="w-32 overflow-hidden rounded-lg h-36 sm:h-44 sm:w-44">
                                            <img
                                                src="images/pic.jpg"
                                                alt=""
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <div className="w-32 overflow-hidden rounded-lg h-36 sm:h-44 sm:w-44">
                                            <img
                                                src="images/pic.jpg"
                                                alt=""
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-6">
                                        <div className="w-32 overflow-hidden rounded-lg h-36 sm:h-44 sm:w-44">
                                            <img
                                                src="images/pic.jpg"
                                                alt=""
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <div className="w-32 overflow-hidden rounded-lg h-36 sm:h-44 sm:w-44">
                                            <img
                                                src="images/pic.jpg"
                                                alt=""
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#"
                            className="inline-block px-4 py-2 mt-6 text-sm font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105"
                        >
                            My Projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
