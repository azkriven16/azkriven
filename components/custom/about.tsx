"use client";

import { Button } from "@/components/ui/button";
import { CERTS } from "@/config/certs";
import { EDUCATION } from "@/config/education";
import { IconDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="py-16"
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="text-xl text-muted-foreground mb-12"
                >
                    Get to know more about my background, qualifications, and
                    passion for software development.
                </motion.p>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                        className="flex flex-col-reverse md:flex-row items-start justify-between gap-8"
                    >
                        <div className="flex flex-col space-y-6 leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25, duration: 0.2 }}
                                className="text-lg"
                            >
                                Hi, I'm Euger, a dedicated software engineer
                                crafting intuitive and functional web
                                applications with a passion for clean code and
                                innovative solutions. My journey in the world of
                                programming has been an exciting adventure of
                                continuous learning and growth.
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.2 }}
                                className="list-disc pl-5 space-y-4"
                            >
                                <li>
                                    I started my coding journey in 2020, diving
                                    headfirst into the world of web development
                                </li>
                                <li>
                                    I have at least 1 year of professional
                                    experience, working on diverse projects and
                                    honing my skills
                                </li>
                                <li>
                                    Most comfortable with React, Next.js, and
                                    TypeScript, but always eager to learn new
                                    technologies
                                </li>
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35, duration: 0.2 }}
                            >
                                <Button asChild>
                                    <Link
                                        href="/euger-resume.pdf"
                                        target="_blank"
                                        download="euger-resume.pdf"
                                    >
                                        <IconDownload className="mr-2 h-4 w-4" />
                                        Download Resume
                                    </Link>
                                </Button>
                            </motion.div>

                            <div className="flex flex-col gap-12 ">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.2,
                                    }}
                                    className="space-y-6"
                                >
                                    <h3 className="font-semibold text-xl">
                                        Education
                                    </h3>
                                    <div className="space-y-4">
                                        {EDUCATION.map((edu, index) => (
                                            <div key={index}>
                                                <p className="font-semibold">
                                                    {edu.degree}
                                                </p>
                                                <p className="text-muted-foreground">
                                                    {edu.school}, {edu.year}
                                                </p>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.45,
                                        duration: 0.2,
                                    }}
                                    className="space-y-6"
                                >
                                    <h3 className="font-semibold text-xl">
                                        Certifications
                                    </h3>
                                    <ul className="space-y-4">
                                        {CERTS.map((item, index) => (
                                            <motion.li
                                                key={item.text}
                                                initial={{
                                                    opacity: 0,
                                                    y: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.5 + index * 0.05,
                                                    duration: 0.2,
                                                }}
                                                className="space-y-2"
                                            >
                                                <Link
                                                    href={item.href}
                                                    target="_blank"
                                                    className="font-semibold underline"
                                                >
                                                    {item.text}
                                                </Link>
                                                <p className="text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
