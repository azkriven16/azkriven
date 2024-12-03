"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiCss3,
    SiHtml5,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPrisma,
    SiFigma,
    SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiFramer } from "react-icons/fi";
export const techStack = [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Tailwind CSS",
    "CSS",
    "HTML",
    "Node.js",
    "Express",
    "MongoDB",
    "Prisma ORM",
    "Framer Motion",
    "Figma",
    "Git",
    "VS Code",
];

const techIcons = {
    React: SiReact,
    "Next.js": SiNextdotjs,
    Typescript: SiTypescript,
    Javascript: SiJavascript,
    "Tailwind CSS": SiTailwindcss,
    CSS: SiCss3,
    HTML: SiHtml5,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    MongoDB: SiMongodb,
    "Prisma ORM": SiPrisma,
    "Framer Motion": FiFramer,
    Figma: SiFigma,
    Git: SiGit,
    "VS Code": VscVscode,
};

export const TechStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 },
        },
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-md font-semibold text-center mb-4">
                    My Techstack
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl p-4 mx-auto"
                >
                    {techStack.map((tech) => {
                        // @ts-ignore
                        const TechIcon = techIcons[tech];
                        return (
                            <motion.div
                                key={tech}
                                variants={itemVariants}
                                whileHover="hover"
                                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
                            >
                                <TechIcon className="w-12 h-12 mb-2 text-foreground" />
                                <p className="text-sm text-center text-gray-600">
                                    {tech}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
