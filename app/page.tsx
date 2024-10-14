"use client";

import Section from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarCircles from "@/components/ui/avatar-circles";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/config/site";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <div>
            <Section className="md:mt-32">
                <h1 className="text-4xl md:text-6xl font-pixel font-black">
                    Web developer <br /> and builder
                </h1>
                <p className="text-lg font-pixel md:w-1/2">
                    I'm Euger, a software engineer at{" "}
                    <span className="text-primary">Rocketshyft</span> ,
                    dedicated to crafting intuitive software experiences. When
                    I'm not coding at work, I enjoy developing my own projects
                    to explore new ideas and technologies.
                </p>
                <Button
                    onClick={() => router.push("/about")}
                    variant="expandIcon"
                    Icon={ChevronRightIcon}
                    iconPlacement="right"
                    className="gap-2 rounded-full"
                >
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/azkriven16.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>EB</AvatarFallback>
                    </Avatar>{" "}
                    About Me
                </Button>
            </Section>

            <Section className="grid gap-y-10 md:gap-y-20">
                {PROJECTS.map((item) => (
                    <div key={item.title} className="space-y-5">
                        <BackgroundGradient>
                            <div className="bg-background overflow-hidden rounded-3xl relative aspect-video">
                                <Image
                                    src={item.imgLight}
                                    alt={item.title}
                                    fill
                                />
                            </div>
                        </BackgroundGradient>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-10">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                {item.title}
                            </h3>
                            <div className="space-y-3 md:space-y-5">
                                <AvatarCircles
                                    avatarUrls={[
                                        "https://avatars.githubusercontent.com/u/16860528",
                                        "https://avatars.githubusercontent.com/u/20110627",
                                        "https://avatars.githubusercontent.com/u/106103625",
                                        "https://avatars.githubusercontent.com/u/59228569",
                                    ]}
                                />
                                <p className="text-muted-foreground">
                                    In this project, I developed a flexible and
                                    scalable design system using Next.js for
                                    front-end development and Figma for design
                                    collaboration.
                                </p>
                                <Button variant="linkHover2" className="p-0">
                                    Read Case Study{" "}
                                    <ChevronRightIcon className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Section>
        </div>
    );
}
