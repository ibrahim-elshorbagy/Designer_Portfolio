import React from "react";
import { FaBehance, FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="container px-4 pb-5 mx-auto pt-7 md:pb-0 max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                <div
                    className="relative"
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <img
                            src="images/asd.png"
                            alt="Belal Elshorbagy"
                            className="transform scale-x-[-1] object-cover"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
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
                                <span className="text-black">UAE , Dubai</span>
                            </div>
                        </div>
                        <div className="flex items-center mb-5 space-x-4 space-y-4 md:space-y-0">
                            <button className="px-4 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105">
                                My CV
                            </button>
                            <div className="flex space-x-4 text-xl">
                                <a
                                    href="https://www.behance.net/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                >
                                    <FaBehance className="social-icon" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                >
                                    <FaTiktok className="social-icon" />
                                </a>
                                <a
                                    href="https://www.instagram.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                >
                                    <FaInstagram className="social-icon" />
                                </a>
                                <a
                                    href="mailto:youremail@example.com"
                                    className="icon-link"
                                >
                                    <FaEnvelope className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
