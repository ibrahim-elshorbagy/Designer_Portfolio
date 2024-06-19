import React, { useState, useEffect } from "react";
import { FaHandPaper } from "react-icons/fa";

const ProfileCard = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const phrases = ["Belal Elshorbagy"];
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTyping) {
                setText(phrases[0].substring(0, index));
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                setText(phrases[0].substring(0, index));
            }
        }, 100);

        if (index === phrases[0].length) {
            clearInterval(interval);
            setIsTyping(false);
            setTimeout(() => {
                setIndex(0);
                setIsTyping(true);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [index, phrases, isTyping]);

    return (
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
            <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-3xl font-bold">
                    Hello <span className="animate-waving-hand">👋🏻</span>
                </h1>

                <h2 className="mt-2 text-4xl font-bold text-blue-500">
                    I’m {text}
                </h2>

                <h3 className="mt-2 text-2xl font-bold text-blue-500 animate-slideUp">
                    A Graphic Designer & Motion Graphic Artist
                </h3>

                <p className="mt-4 text-xl text-gray-700">
                    Hi, I'm Belal Elshorbagy, a freelance graphic designer and
                    motion graphic artist from Dubai. I help brands bring their
                    creative visions to life with stunning visual solutions.
                </p>

                <div className="flex justify-center mt-6 md:justify-start">
                    <button className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105">
                        Hire Me
                    </button>
                </div>
            </div>

            <div className="px-4 mt-8 md:w-1/2 md:mt-0">
                <img
                    src="images/asd.png"
                    alt="Belal Elshorbagy"
                    className="object-cover w-4/5 h-1/2 "
                />
            </div>
        </div>
    );
};

export default ProfileCard;
