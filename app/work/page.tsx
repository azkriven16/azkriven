"use client";

import Section from "@/components/section";
import AvatarCircles from "@/components/ui/avatar-circles";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/site";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Work() {
    return (
        <div>
            <Section className="md:mt-32">
                <h1 className="text-4xl md:text-6xl font-pixel font-black">
                    Selected Works
                </h1>
                <p className="text-lg font-pixel text-muted-foreground">
                    A showcase of my projects, where I explore innovative ideas
                    and cutting-edge technologies.
                </p>
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
