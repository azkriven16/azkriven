"use client";

import { CERTS } from "@/config/certs";
import { IconCode, IconSchool } from "@tabler/icons-react";
import Link from "next/link";

export const About = () => {
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    About Me
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                    Get to know more about my background and qualifications.
                </p>

                <div className="space-y-12">
                    <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
                        <div className="flex flex-col space-y-6 leading-relaxed">
                            <p className="text-lg">
                                Hi, I'm Euger, a dedicated software engineer
                                crafting intuitive and functional web
                                applications with a passion for clean code and
                                innovative solutions.
                            </p>
                            <ul className="list-disc pl-5 space-y-4">
                                <li>I started coding in 2020</li>
                                <li>I have at least 1 year of experience</li>
                                <li>
                                    Most comfortable with React, Next.js, and
                                    TypeScript
                                </li>
                            </ul>

                            <div className="flex flex-col gap-12 mt-12">
                                <div className="space-y-6">
                                    <h3 className="flex items-center gap-2 font-semibold text-xl">
                                        <IconSchool className="w-6 h-6" />
                                        Education
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-semibold">
                                                Bachelor of Science in Computer
                                                Science
                                            </p>
                                            <p className="text-muted-foreground">
                                                University of the Philippines,
                                                2023
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Full-Stack Development Bootcamp
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
                                </div>
                                <div className="space-y-6">
                                    <h3 className="flex items-center gap-2 font-semibold text-xl">
                                        <IconCode className="w-6 h-6" />
                                        Certifications
                                    </h3>
                                    <ul className="space-y-4">
                                        {CERTS.map((item) => (
                                            <li
                                                key={item.text}
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
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
