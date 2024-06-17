import React from "react";
import { FaDesktop, FaCode, FaUserAlt } from "react-icons/fa";

const Services = () => {
    const servicesData = [
        {
            icon: <FaDesktop className="w-8 h-8 text-blue-500" />,
            title: "Web Design",
            description:
                "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        },
        {
            icon: <FaCode className="w-8 h-8 text-blue-500" />,
            title: "Web Development",
            description:
                "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        },
        {
            icon: <FaUserAlt className="w-8 h-8 text-blue-500" />,
            title: "UI/UX Design",
            description:
                "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        },
    ];

    return (
        <div className="pt-12 pb-24">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="w-64 mb-12 ">
                    <h2 className="mb-4 text-3xl font-extrabold text-left text-gray-900">
                        My Services
                    </h2>
                    <h3 className="mb-3 text-xl font-bold text-left text-gray-900">
                        Awesome Services For You
                    </h3>
                    <hr className="mb-8 border-t-2 border-gray-300 dark:border-gray-700" />
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="flex p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
                        >
                            <div className="flex items-start justify-start w-12 md:w-16 lg:w-24">
                                <div>{service.icon}</div>
                            </div>
                            <div className="ml-4">
                                <h4 className="mb-2 text-xl font-bold">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-block mt-4 font-semibold text-blue-500 hover:text-blue-700"
                                >
                                    Explore Service
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
