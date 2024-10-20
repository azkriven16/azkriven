"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconMapPin, IconSchool } from "@tabler/icons-react";
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
                        I'm a passionate full-stack developer dedicated to
                        building impactful products and web applications that
                        can touch millions of lives.
                    </p>
                    <p>
                        As a software engineer and student, I focus on creating
                        scalable web apps that are both performance-optimized
                        and visually appealing.
                    </p>
                    {path.includes("/about") && (
                        <div className="space-y-5 pt-10">
                            <div className="flex justify-center md:justify-start items-center gap-2 font-semibold text-lg">
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
                            <p className="font-semibold">High School Diploma</p>
                            <p className="text-muted-foreground text-sm">
                                Iloilo National High School, 2019
                            </p>
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
