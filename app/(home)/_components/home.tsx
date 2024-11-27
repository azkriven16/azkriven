"use client";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import TextRevealByWord from "@/components/ui/text-reveal";
import WordPullUp from "@/components/ui/word-pull-up";
import { ArrowDown } from "lucide-react";
import { FocusCardsDemo } from "./card-grid";
import { LinkPreviewDemo } from "./link-preview";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MarqueeDemo } from "./marquee";

export const HomeComponent = () => {
    return (
        <main className="p-4">
            <div className="flex items-center justify-center min-h-screen relative">
                <WordPullUp
                    delayMultiple={1}
                    className="text-5xl md:text-8xl text-center"
                    words="Hi. I'm Euger Bonete, Software developer"
                />

                <div className="absolute inset-x-0 bottom-10 flex justify-center">
                    <div className="flex flex-col items-center">
                        <ArrowDown className="animate-bounce" />
                        <p>Scroll Down</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Today's websites become dull, lacking in quality, and fail to retain users' attention." />
            </div>
            <div className="flex items-center justify-center">
                <TextRevealByWord text="But fear not! I am are here to build amazing experiences for your users & make your brand stand out online." />
            </div>

            <div className="flex items-center justify-center">
                <VelocityScroll
                    text="Keep scrolling"
                    default_velocity={5}
                    className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Dedicated to delivering designs and functionalities that not only engage users but also elevate your brand's online presence" />
            </div>

            <div className="flex items-center justify-center h-[40rem]">
                <VelocityScroll
                    text="My Work Experience"
                    default_velocity={5}
                    className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Here are some of the companies I've worked with and my role in each one" />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <FocusCardsDemo />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Here are some of the projects I built in my free time and for my clients" />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <FocusCardsDemo />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="What they say about me and my work delivering" />
            </div>

            <div className="flex items-center h-[200vh] justify-center max-w-4xl mx-auto">
                <MarqueeDemo />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Let's work together. Let me help you bring your ideas to reality." />
            </div>
        </main>
    );
};

const projects = [
    {
        id: 1,
        title: "Geometric Patterns",
        description: "Exploring the beauty of shapes",
        image: "/projects/digipay.png",
        category: "Design",
    },
    {
        id: 2,
        title: "Illustration Study",
        description: "Bringing ideas to life through art",
        image: "/projects/rocketshyft.png",
        category: "Illustration",
    },
    {
        id: 3,
        title: "Brand Identity",
        description: "Crafting unique visual languages",
        image: "/projects/nisuboard.png",
        category: "Branding",
    },
    {
        id: 4,
        title: "Abstract Art",
        description: "Expressing emotions through color",
        image: "/projects/animinji.png",
        category: "Art",
    },
];
