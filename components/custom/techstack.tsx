"use client";

import {
    IconBrandFirebase,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandTypescript,
} from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export const TechStack = () => {
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: IconBrandTypescript,
                                name: "TypeScript",
                                description: "Typed JavaScript superset",
                            },
                            {
                                icon: IconBrandReact,
                                name: "React",
                                description: "UI building library",
                            },
                            {
                                icon: IconBrandNextjs,
                                name: "Next.js",
                                description: "React production framework",
                            },
                            {
                                icon: IconBrandPrisma,
                                name: "Prisma",
                                description: "Modern database toolkit",
                            },
                            {
                                icon: IconBrandMongodb,
                                name: "MongoDB",
                                description: "NoSQL database solution",
                            },
                            {
                                icon: IconBrandTailwind,
                                name: "Tailwind CSS",
                                description: "Utility-first CSS framework",
                            },
                        ].map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.05 }}
                                className="flex items-center p-4 shadow-md border rounded-lg"
                            >
                                <tech.icon className="w-12 h-12 mr-4" />
                                <div>
                                    <p className="font-semibold">{tech.name}</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {tech.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
