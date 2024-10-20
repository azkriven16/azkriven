"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CERTS } from "@/config/certs";
import { IconCode, IconMapPin, IconSchool } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function About() {
    const path = usePathname();
    return (
        <section className="space-y-10">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-end gap-5">
                <div className="flex flex-col space-y-5 leading-tight">
                    <h1 className="text-center md:text-left text-2xl md:text-4xl font-roboto font-black">
                        👋 Hello! I'm Euger
                    </h1>
                    <div className="flex justify-center md:justify-start items-center gap-2 font-semibold text-lg">
                        <IconMapPin />
                        Iloilo, Philippines
                    </div>
                    <p>
                        I'm Euger Bonete, a dedicated software engineer and a
                        fourth-year student. My passion for coding began during
                        the 2020, where I embarked on a self-learning journey.
                        Through perseverance and consistent practice. I've
                        successfully transitioned my skills into professional
                        roles.
                    </p>
                    <p>
                        Today, I'm proud to be working as a web developer, where
                        I'm continuously honing my abilities and contributing to
                        innovative projects. My goal is to leverage my technical
                        expertise to drive positive impact and contribute to the
                        growth of the tech industry.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        “I’ll leave tomorrow’s problems to tomorrow’s me.”
                    </p>
                    {path.includes("/about") && (
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="space-y-5 pt-10">
                                <div className="flex items-center gap-2 font-semibold text-lg">
                                    <IconSchool />
                                    Education
                                </div>
                                <p className="font-semibold">
                                    Bachelor of Science in Computer Science
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    University of the Philippines, 2023
                                </p>
                                <p className="font-semibold">
                                    Full-Stack Development Bootcamp
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    CodeAcademy, 2022
                                </p>
                                <p className="font-semibold">
                                    High School Diploma
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Iloilo National High School, 2019
                                </p>
                            </div>
                            <div className="space-y-5 pt-10">
                                <div className="flex items-center gap-2 font-semibold text-lg">
                                    <IconCode />
                                    Certifications
                                </div>
                                <ul className="space-y-5">
                                    {CERTS.map((item) => (
                                        <li
                                            key={item.text}
                                            className="space-y-1"
                                        >
                                            <Link
                                                href={item.href}
                                                target="_blank"
                                                className="font-semibold"
                                            >
                                                {item.text}
                                            </Link>
                                            <p className="text-muted-foreground text-xs">
                                                {item.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <Avatar>
                    <AvatarImage
                        src="https://github.com/azkriven16.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </section>
    );
}
