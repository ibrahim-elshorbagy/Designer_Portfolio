// src/components/HireMe.js
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div className="relative py-6 mt-3 text-white bg-gray-900 md:mt-12">
            <div className="absolute inset-0 transform bg-gray-900 "></div>
            <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <h2 className="mb-6 font-extrabold md:text-3xl sm:text-4xl">
                    Got a Project? Let's Talk!
                </h2>
                <a
                    href="mailto:your-email@example.com"
                    className="inline-flex items-center px-2 py-1.5 text-base font-medium text-gray-900 bg-blue-500 border border-transparent rounded-md md:px-5 md:py-3 hover:bg-blue-600"
                >
                    Contact Me
                    <HiOutlineMail className="w-5 h-5 ml-2 -mr-1" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
