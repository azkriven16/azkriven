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
import { motion } from "framer-motion";
import { SKILLS } from "@/config/skills";

export const TechStack = () => {
    const iconMap = {
        HTML5: IconBrandHtml5,
        CSS3: IconBrandCss3,
        JavaScript: IconBrandJavascript,
        TypeScript: IconBrandTypescript,
        React: IconBrandReact,
        "Next.js": IconBrandNextjs,
        "Tailwind CSS": IconBrandTailwind,
        MongoDB: IconBrandMongodb,
        Prisma: IconBrandPrisma,
        Firebase: IconBrandFirebase,
        Git: IconBrandGit,
        GitHub: IconBrandGithub,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="py-16"
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                >
                    My Tech Stack
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-xl text-muted-foreground mb-12"
                >
                    These are the technologies I work with most frequently.
                </motion.p>

                {SKILLS.map((category, categoryIndex) => (
                    <div key={category.name} className="mb-12">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2 + categoryIndex * 0.1,
                            }}
                            className="text-2xl font-semibold mb-6"
                        >
                            {category.name}
                        </motion.h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {category.stack.map((tech, index) => {
                                const Icon =
                                    iconMap[tech as keyof typeof iconMap];
                                return (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay:
                                                0.3 +
                                                categoryIndex * 0.1 +
                                                index * 0.05,
                                        }}
                                        className="flex flex-col items-center justify-center p-4 shadow-md border rounded-lg text-center"
                                    >
                                        <Icon className="w-12 h-12 mb-2" />
                                        <p className="font-semibold">{tech}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
