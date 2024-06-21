import React, { useState, useEffect } from "react";
import { FaHandPaper } from "react-icons/fa";
import { motion } from "framer-motion";

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
        <div className="container relative flex flex-col items-center justify-between mx-auto md:h-screen md:flex-row">
            <motion.div
                className="absolute hidden w-5 h-5 bg-blue-400 shadow-md md:block top-40 right-40 "
                animate={{
                    scale: [1, 2, 2, 1],
                    rotate: [0, 90, 90, 0],
                    borderRadius: ["10%", "10%", "50%", "10%"],
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            />

            <motion.div
                className="absolute hidden w-5 h-5 bg-blue-400 shadow-md md:block bottom-60 right-2/4"
                animate={{
                    scale: [1, 2, 2, 1],
                    rotate: [0, 90, 90, 0],
                    borderRadius: ["10%", "10%", "50%", "10%"],
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            />

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-center md:text-left md:w-1/2"
            >
                <div className="px-4">
                    <div>
                        <h1 className="flex justify-center text-2xl font-bold md:text-4xl md:justify-start">
                            Hello <h1 className="animate-waving-hand">👋🏻</h1>
                        </h1>

                        <h2 className="mt-2 text-2xl font-bold text-blue-500 md:text-4xl">
                            I’m {text}
                        </h2>
                    </div>
                    <h3 className="px-4 my-2 font-bold text-blue-500 md:p-2 md:text-2xl sm:text-lg animate-slideUp">
                        A Graphic Designer & Motion Graphic Artist
                    </h3>

                    <p className="px-4 text-gray-700 md:p-2 md:text-xl">
                        Hi, I'm Belal Elshorbagy, a freelance graphic designer
                        and motion graphic artist from Dubai. I help brands
                        bring their creative visions to life with stunning
                        visual solutions.
                    </p>

                    <div className="flex justify-center mt-6 md:justify-start">
                        <button className="hidden md:block px-2 text-xs md:text-lg py-1.5 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md md:px-6 md:py-3 hover:bg-blue-600 hover:scale-105">
                            Hire Me
                        </button>
                    </div>
                </div>
            </motion.div>
            <div className="justify-center hidden px-4 mt-8 md:w-1/2 md:mt-0 md:inline-flex">
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    src="images/asd.png"
                    alt="Belal Elshorbagy"
                    className="object-cover w-4/5 h-1/2 "
                />
            </div>
        </div>
    );
};

export default ProfileCard;
