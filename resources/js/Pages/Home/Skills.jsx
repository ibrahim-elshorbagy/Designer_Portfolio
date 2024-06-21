import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="flex items-center justify-center py-6 md:py-12">
            <div className="container grid grid-cols-1 gap-8 p-4 lg:p-8 lg:grid-cols-2 xl:p-12">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="w-5/6">
                        <h2 className="mb-4 text-xl font-extrabold text-gray-900 md:text-3xl ">
                            Creative and Professional Skills
                        </h2>
                        <h3 className="mb-3 font-bold text-gray-900 md:text-xl">
                            Gain insights into my proficiency
                        </h3>
                        <hr className="mb-8 border-t-2 border-indigo-500 " />
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec feugiat fringilla lorem sed bibendum. Pellentesque
                        venenatis, ipsum eget ullamcorper gravida in mattis
                        ipsum ligula at tellus.
                    </p>
                    <button className="px-2 text-xs md:text-lg py-1.5 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md md:px-6 md:py-3 hover:bg-blue-600 hover:scale-105">
                        Hire Me
                    </button>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <SkillItem
                        title="Product Design & Development"
                        percentage={87}
                    />
                    <SkillItem title="Web Development" percentage={89} />
                    <SkillItem title="Front-End Development" percentage={55} />
                    <SkillItem
                        title="UI Design & UX Development"
                        percentage={67}
                    />
                </motion.div>
            </div>
        </div>
    );
};

const SkillItem = ({ title, percentage }) => {
    return (
        <div className="flex items-end w-full mb-6">
            <div className="flex-1">
                <h3 className="mb-2 font-semibold text-gray-900 md:text-lg">
                    {title}
                </h3>
                <div className="relative h-2 bg-blue-100 md:h-4">
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: `${percentage}%` }} // Using template literal to concatenate '%'
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-r-sm"
                    />
                </div>
            </div>
            <div className="ml-2 text-xs font-semibold text-black -top-1 md:mt-1 md:text-sm">
                {percentage}%
            </div>
        </div>
    );
};

export default Skills;
