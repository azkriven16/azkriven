"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Eco Tracker",
        description:
            "A sustainable living app that helps users reduce their carbon footprint.",
        imageUrl:
            "https://images.unsplash.com/photo-1629177023540-619f8e2412f1?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["React Native", "Node.js", "MongoDB"],
    },
    {
        title: "Mindful",
        description: "An AI-powered meditation and mindfulness application.",
        imageUrl:
            "https://images.unsplash.com/photo-1622839144198-63bb83ab8722?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["React", "TensorFlow.js", "Express"],
    },
    {
        title: "Urban Pulse",
        description:
            "Real-time city data visualization platform for urban planners.",
        imageUrl:
            "https://images.unsplash.com/photo-1558615126-2bfaf6926e10?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Vue.js", "D3.js", "Python"],
    },
    {
        title: "CodeCollab",
        description:
            "Collaborative coding environment with real-time pair programming features.",
        imageUrl:
            "https://images.unsplash.com/photo-1695406091852-fd2de416d853?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["WebRTC", "Socket.io", "Monaco Editor"],
    },
];

const ProjectGrid: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-12 md:text-center text-white">
                Our Projects
            </h2>
            <div className="space-y-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    tags,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative h-[50vh] overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
            </motion.div>

            <div className="relative z-20 h-full flex flex-col justify-between p-8">
                <motion.h2
                    className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-none"
                    initial={{ y: 0 }}
                    animate={{ y: isHovered ? -20 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                >
                    <p className="text-lg mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
