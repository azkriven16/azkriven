import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
const experiences = [
    {
        date: "2024 - Present",
        role: "Frontend Engineer Part Time",
        company: "Rocketshyft",
        description:
            "Developed and maintained responsive React applications using Vite for faster development and build times. Implemented reusable UI components using the Material-UI (MUI) design system. Containerized frontend applications using Docker for consistent development and deployment environments.",
        technologies: ["React", "Vite", "Material-UI", "Docker", "TypeScript"],
        link: "https://rocketshyft.com/",
        logo: "/logo/rocketshyft.webp",
    },
    {
        date: "2021",
        role: "Frontend Engineer Intern",
        company: "Digipay",
        description:
            "Developed and maintained responsive web interfaces using React and modern frontend technologies. Collaborated with designers and backend teams to implement UI features based on Jira tickets. Participated in agile ceremonies and utilized project management tools for task tracking.",
        technologies: ["React", "Sass", "Bootstrap", "Synesthesia"],
        link: "https://www.digipay.ph/",
        logo: "/logo/digipay-logo.png",
    },
    // {
    //     date: "2022",
    //     role: "Web Developer",
    //     company: "Synesthesia",
    //     description:
    //         "Built responsive websites using Bubble.io's no-code platform following client requirements. Collaborated with designers to accurately implement Figma designs into functional web pages. Customized Bubble.io components and workflows to match design specifications.",
    //     technologies: ["Bubble.io", "Figma", "HTML", "CSS", "JavaScript"],
    //     link: "#",
    //     // logo: "/logo/rocketshyft.webp",
    // },
];
export const Experience = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
            {experiences.map((experience, index) => (
                <Link key={index} href={experience.link} target="_blank">
                    <motion.div className="space-y-4 relative hover:bg-secondary/50 transition-all p-4 border rounded-lg h-[27rem]">
                        <motion.p className="text-sm text-muted-foreground">
                            {experience.date}
                        </motion.p>
                        {experience.logo && (
                            <Image
                                src={experience.logo}
                                alt={experience.company}
                                width={200}
                                height={200}
                            />
                        )}
                        <motion.div className="space-y-2">
                            <h3 className="text-lg md:text-xl font-semibold">
                                {experience.role}, {experience.company}
                            </h3>
                            <p className="text-muted-foreground md:text-balance leading-relaxed">
                                {experience.description}
                            </p>
                        </motion.div>
                        <motion.div>
                            <Button
                                variant="outline"
                                className="rounded-full"
                                asChild
                            >
                                <a
                                    href={experience.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Visit Link</span>
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                        </motion.div>
                        {index !== experiences.length - 1 && (
                            <motion.div className="mt-12 border-t border-secondary/20" />
                        )}
                    </motion.div>
                </Link>
            ))}
        </div>
    );
};
