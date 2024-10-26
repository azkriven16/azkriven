"use client";

import {
    IconBrandFirebase,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandTailwind,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandGit,
    IconBrandGithub,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export const TechStack = () => {
    const categories = [
        {
            name: "Front-end",
            technologies: [
                { icon: IconBrandHtml5, name: "HTML5" },
                { icon: IconBrandCss3, name: "CSS3" },
                { icon: IconBrandJavascript, name: "JavaScript" },
                { icon: IconBrandTypescript, name: "TypeScript" },
                { icon: IconBrandReact, name: "React" },
                { icon: IconBrandNextjs, name: "Next.js" },
                { icon: IconBrandTailwind, name: "Tailwind CSS" },
            ],
        },
        {
            name: "Back-end",
            technologies: [
                { icon: IconBrandMongodb, name: "MongoDB" },
                { icon: IconBrandPrisma, name: "Prisma" },
                { icon: IconBrandFirebase, name: "Firebase" },
            ],
        },
        {
            name: "Version Control",
            technologies: [
                { icon: IconBrandGit, name: "Git" },
                { icon: IconBrandGithub, name: "GitHub" },
            ],
        },
    ];

    return (
        <AnimatePresence key="techstack">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="py-16"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-8"
                    >
                        My Tech Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-xl text-muted-foreground mb-12"
                    >
                        These are the technologies I work with most frequently.
                    </motion.p>

                    {categories.map((category, categoryIndex) => (
                        <div key={category.name} className="mb-12">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                                className="text-2xl font-semibold mb-6"
                            >
                                {category.name}
                            </motion.h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                {category.technologies.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + categoryIndex * 0.1 + index * 0.05 }}
                                        className="flex flex-col items-center justify-center p-4 shadow-md border rounded-lg text-center"
                                    >
                                        <tech.icon className="w-12 h-12 mb-2" />
                                        <p className="font-semibold">{tech.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
