// src/components/HireMe.js
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const HireMe = () => {
    return (
        <div className="relative py-12 text-white bg-gray-900">
            <div className="absolute inset-0 transform bg-gray-900 -skew-y-2"></div>
            <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <h3 className="mb-3 text-sm tracking-wider text-gray-400 uppercase">
                    Contact Me
                </h3>
                <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">
                    Got a Project? Let's Talk!
                </h2>
                <a
                    href="mailto:your-email@example.com"
                    className="inline-flex items-center px-5 py-3 text-base font-medium text-gray-900 bg-blue-500 border border-transparent rounded-md hover:bg-blue-600"
                >
                    Contact Me
                    <HiOutlineMail className="w-5 h-5 ml-2 -mr-1" />
                </a>
            </div>
        </div>
    );
};

export default HireMe;
