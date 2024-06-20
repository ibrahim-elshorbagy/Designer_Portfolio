import React,{useState} from "react";
import { Tab } from "@headlessui/react";
import { Link } from "@inertiajs/react";


export default function Projects({ projects }) {

const [hoveredItem, setHoveredItem] = useState(null);
    const categories = ["brand", "Graphic Design", "Motion Graphic"];

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    // Function to filter projects by category
    const filteredProjects = selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : [];

    return (
        <div className="container p-6 mx-auto">
            <div className="max-w-2xl mx-auto mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-gray-900">
                    Projects
                </h2>
                <p className="text-lg text-gray-600">
                    Gain insights into my proficiency Projects
                </p>
            </div>
            <div className="container p-6 mx-auto rounded-lg">
                <div className="w-full sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex justify-center gap-5">
                            {categories.map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        `font-medium text-black ${
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
                                    className="p-6 bg-white rounded-xl ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus"
                                >
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                        {category === selectedCategory &&
                                            filteredProjects.map((project) => (
                                                <div
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
                                                        <iframe
                                                            title={project.name}
                                                            width="100%"
                                                            className="h-[280px]"
                                                            src={
                                                                project.intro_link
                                                            }
                                                            allowFullScreen
                                                        />
                                                    ) : (
                                                        // Display cover image if intro_link does not exist
                                                        <img
                                                            src={
                                                                project.cover_path
                                                            }
                                                            alt={project.name}
                                                            className="object-cover w-full h-[280px]"
                                                        />
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
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
}
