"use client";

import { SKILLS } from "@/config/skills";
import {
    IconBrandCss3,
    IconBrandFirebase,
    IconBrandGit,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandTypescript,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Section } from "./section";

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {SKILLS.map((tech, index) => {
                const Icon = iconMap[tech as keyof typeof iconMap];
                return (
                    <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center p-4 shadow-md border text-center aspect-video text-muted-foreground"
                    >
                        <Icon className="w-12 h-12 mb-2" />
                        <p className="font-semibold">{tech}</p>
                    </motion.div>
                );
            })}
        </div>
    );
};
