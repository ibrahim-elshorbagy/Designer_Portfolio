import React from "react";

const AboutMe = () => {
    return (
        <div className="container px-4 py-8 mx-auto max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                <div className="relative">
                    <img
                        src="images/pic.jpg"
                        alt="Belal Elshorbagy"
                        className="object-cover w-full h-full shadow-lg rounded-xl"
                    />
                </div>
                <div className="flex flex-col space-y-6">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold ">About Me</h2>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4 text-xl ">
                        <div className="font-semibold text-gray-800">
                            <div className="flex items-center space-x-2">
                                <span>Name:</span>
                                <span className="text-black">
                                    Belal Elshorbagy
                                </span>
                            </div>
                            <div className="flex items-center pt-1 space-x-2">
                                <span>Location:</span>
                                <span className="text-black">Dubai</span>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105">
                                Download CV
                            </button>
                            <button className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105">
                                Follow me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
