import React,{useState} from "react";
import { Tab } from "@headlessui/react";
import { Link } from "@inertiajs/react";

import { motion } from "framer-motion";

export default function Projects({ projects }) {

const [hoveredItem, setHoveredItem] = useState(null);
    const categories = ["brand", "Graphic Design", "Motion Graphic"];

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    // Function to filter projects by category
    const filteredProjects = selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : [];

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };
    const gridSquareVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="container p-2 mx-auto md:p-6"
        >
            <div className="max-w-2xl mx-auto mb-3 text-center">
                <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-3xl">
                    Gallary
                </h2>
                <p className="text-gray-600 md:text-lg">
                    Gain insights into my proficiency Projects
                </p>
            </div>
            <div className="container mx-auto rounded-lg md:p-6">
                <div className="w-full sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex justify-center gap-3 md:gap-5">
                            {categories.map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        `text-xs md:text-lg md:font-medium text-black ${
                                            selected
                                                ? "text-blue-500"
                                                : "text-black hover:bg-white/[0.12]"
                                        }`
                                    }
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {categories.map((category) => (
                                <Tab.Panel
                                    key={category}
                                    className="md:p-6 rounded-xl ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus"
                                >
                                    <motion.div
                                        variants={gridContainerVariants}
                                        initial="hidden"
                                        animate="show"
                                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                                    >
                                        {category === selectedCategory &&
                                            filteredProjects.map((project) => (
                                                <div
                                                    variants={
                                                        gridSquareVariants
                                                    }
                                                    key={project.id}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="relative overflow-hidden rounded-md bg-gray-50 hover:bg-gray-100"
                                                    onMouseEnter={() =>
                                                        setHoveredItem(
                                                            project.id
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        setHoveredItem(null)
                                                    }
                                                >
                                                    {project.intro_link ? (
                                                        // Display video iframe if intro_link exists
                                                        <Link
                                                            className="hover:underline"
                                                            href={route(
                                                                "project.show",
                                                                project.slug
                                                            )}
                                                        >
                                                            <iframe
                                                                title={
                                                                    project.name
                                                                }
                                                                width="100%"
                                                                className="h-[150px] md:h-[280px]"
                                                                src={
                                                                    project.intro_link
                                                                }
                                                                allowFullScreen
                                                            />
                                                        </Link>
                                                    ) : (
                                                        // Display cover image if intro_link does not exist
                                                        <Link
                                                            className="hover:underline"
                                                            href={route(
                                                                "project.show",
                                                                project.slug
                                                            )}
                                                        >
                                                            <img
                                                                src={
                                                                    project.cover_path
                                                                }
                                                                alt={
                                                                    project.name
                                                                }
                                                                className="object-cover w-full h-[150px]   md:h-[280px]"
                                                            />
                                                        </Link>
                                                    )}

                                                    {hoveredItem ===
                                                        project.id && (
                                                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-blue-500 bg-opacity-50 tooltip">
                                                            <Link
                                                                className="hover:underline"
                                                                href={route(
                                                                    "project.show",
                                                                    project.slug
                                                                )}
                                                            >
                                                                {project.name}
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                    </motion.div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </motion.div>
    );
}
