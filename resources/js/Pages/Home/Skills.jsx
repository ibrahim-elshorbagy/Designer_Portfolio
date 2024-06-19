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
                        <hr className="mb-8 border-t-2 border-indigo-500 " />
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
            <div className="flex items-end w-full mb-6">
                <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
                    <div className="relative h-4 bg-blue-100">
                        <div
                            className="absolute top-0 left-0 h-full bg-blue-500 rounded-r-sm"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                </div>
                <div className="mt-1 ml-2 text-sm font-semibold text-black">
                    {percentage}%
                </div>
            </div>
    );
};

export default Skills;
