import Section from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EXPERIENCE, SITE_CONFIG, SKILLS, SOCIALS } from "@/config/site";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function About() {
    return (
        <Section className="flex flex-col md:flex-row items-center md:items-start justify-between md:gap-20">
            <div className="space-y-5 flex flex-col">
                <Avatar className="h-32 w-32">
                    <AvatarImage
                        src="https://github.com/azkriven16.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>EB</AvatarFallback>
                </Avatar>

                <div className="flex gap-2">
                    <Badge variant="outline">English</Badge>
                    <Badge variant="outline">Tagalog</Badge>
                </div>

                <div className="grid grid-cols-4">
                    {SOCIALS.map((item) => (
                        <Button key={item.text} size="icon" variant="ghost">
                            <item.Icon className="h-4 w-4" />
                        </Button>
                    ))}
                </div>

                <div className="hidden md:flex flex-col fixed inset-y-1/2 gap-2">
                    <Link
                        className="hover:text-primary flex items-center gap-2"
                        href="#about"
                    >
                        <ChevronRight className="h-4 w-4" /> About
                    </Link>
                    <Link
                        className="hover:text-primary flex items-center gap-2"
                        href="#work"
                    >
                        <ChevronRight className="h-4 w-4" /> Work Experience
                    </Link>
                    <Link
                        className="hover:text-primary flex items-center gap-2"
                        href="#studies"
                    >
                        <ChevronRight className="h-4 w-4" /> Studies
                    </Link>
                    <Link
                        className="hover:text-primary flex items-center gap-2"
                        href="#tech"
                    >
                        <ChevronRight className="h-4 w-4" /> Technical Skills
                    </Link>
                </div>
            </div>
            <div className="space-y-10">
                <div id="about" className="space-y-3 mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left">
                        {SITE_CONFIG.name}
                    </h1>
                    <h3 className="text-3xl text-muted-foreground text-center md:text-left">
                        Software Engineer
                    </h3>
                    <p>
                        Selene is a Jakarta-based design engineer with a passion
                        for transforming complex challenges into simple, elegant
                        design solutions. Her work spans digital interfaces,
                        interactive experiences, and the convergence of design
                        and technology.
                    </p>
                </div>
                <div className="space-y-5 pb-20">
                    <h3 id="work" className="text-4xl font-bold">
                        Work Experience
                    </h3>

                    {EXPERIENCE.map((item) => (
                        <>
                            <div className="flex justify-between">
                                <div>
                                    <h4 className="text-xl font-semibold">
                                        {item.company}
                                    </h4>
                                    <p className="text-primary">{item.role}</p>
                                </div>
                                <div>{item.date}</div>
                            </div>

                            <ul className="list-disc space-y-5 ml-5">
                                <li>{item.desc[0]}</li>
                                <li>{item.desc[1]}</li>
                            </ul>
                        </>
                    ))}
                </div>

                <div className="space-y-5 pb-20">
                    <h3 id="studies" className="text-4xl font-bold">
                        Studies
                    </h3>
                    <div>
                        <h4 className="text-xl font-semibold">
                            Northern IloIlo State University
                        </h4>
                        <p className="text-muted-foreground">
                            Studied software engineering.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold">
                            Northern IloIlo State University
                        </h4>
                        <p className="text-muted-foreground">
                            Studied software engineering.
                        </p>
                    </div>
                </div>

                <div className="space-y-5 pb-20">
                    <h3 id="tech" className="text-4xl font-bold">
                        Technical skills
                    </h3>

                    {SKILLS.map((item) => (
                        <div key={item.name}>
                            <h4 className="text-xl font-semibold mb-2">
                                {item.name}
                            </h4>
                            <div className="flex gap-2 text-muted-foreground">
                                {item.stack.map((skill, index) => (
                                    <p key={index}>
                                        {skill}
                                        {index < item.stack.length - 1
                                            ? ","
                                            : ""}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
