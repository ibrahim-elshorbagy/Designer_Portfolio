import React from "react";

const Skills = () => {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="container grid grid-cols-1 gap-8 p-4 lg:p-8 lg:grid-cols-2 xl:p-12">
                <div className="">
                    <div className="w-5/6">
                        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 ">
                            Creative and Professional Skills
                        </h2>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                            Gain insights into my proficiency
                        </h3>
                        <hr className="mb-8 border-t-2 border-gray-300 dark:border-gray-700" />
                    </div>

                    <p className="mb-6 text-xl leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec feugiat fringilla lorem sed bibendum. Pellentesque
                        venenatis, ipsum eget ullamcorper gravida in mattis
                        ipsum ligula at tellus.
                    </p>
                    <button className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105">
                        Hire Me
                    </button>
                </div>

                {/* Right Side */}
                <div className="">
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
                </div>
            </div>
        </div>
    );
};

const SkillItem = ({ title, percentage }) => {
    return (
        <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {title}
            </h3>
            <div className="relative h-6 bg-gray-300 rounded-lg">
                <div
                    className="absolute top-0 left-0 h-6 bg-blue-500 rounded-lg"
                    style={{ width: `${percentage}%` }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-6 text-xs font-semibold text-white">
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default Skills;
