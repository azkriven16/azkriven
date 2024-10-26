"use client";

import { CERTS } from "@/config/certs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const About = () => {
    return (
        <AnimatePresence key="about">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="py-16"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                        className="text-3xl md:text-4xl font-bold mb-8"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                        className="text-xl text-muted-foreground mb-12"
                    >
                        Get to know more about my background and qualifications.
                    </motion.p>

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.2 }}
                            className="flex flex-col-reverse md:flex-row items-start justify-between gap-8"
                        >
                            <div className="flex flex-col space-y-6 leading-relaxed">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.25, duration: 0.2 }}
                                    className="text-lg"
                                >
                                    Hi, I'm Euger, a dedicated software engineer
                                    crafting intuitive and functional web
                                    applications with a passion for clean code
                                    and innovative solutions.
                                </motion.p>
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.2 }}
                                    className="list-disc pl-5 space-y-4"
                                >
                                    <li>I started coding in 2020</li>
                                    <li>
                                        I have at least 1 year of experience
                                    </li>
                                    <li>
                                        Most comfortable with React, Next.js,
                                        and TypeScript
                                    </li>
                                </motion.ul>

                                <div className="flex flex-col gap-12 pt-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.35,
                                            duration: 0.2,
                                        }}
                                        className="space-y-6"
                                    >
                                        <h3 className="font-semibold text-xl">
                                            Education
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="font-semibold">
                                                    Bachelor of Science in
                                                    Computer Science
                                                </p>
                                                <p className="text-muted-foreground">
                                                    University of the
                                                    Philippines, 2023
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">
                                                    Full-Stack Development
                                                    Bootcamp
                                                </p>
                                                <p className="text-muted-foreground">
                                                    CodeAcademy, 2022
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">
                                                    High School Diploma
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Iloilo National High School,
                                                    2019
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.4,
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
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            0.45 + index * 0.05,
                                                        duration: 0.2,
                                                    }}
                                                    className="space-y-2"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        target="_blank"
                                                        className="font-semibold hover:underline"
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
        </AnimatePresence>
    );
};
