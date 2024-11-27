"use client";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import TextRevealByWord from "@/components/ui/text-reveal";
import WordPullUp from "@/components/ui/word-pull-up";
import { ArrowDown } from "lucide-react";
import { FocusCardsDemo } from "./card-grid";
import { MarqueeDemo } from "./marquee";

export const AboutComponent = () => {
    return (
        <main className="p-4">
            <div className="flex items-center justify-center min-h-screen relative">
                <WordPullUp
                    delayMultiple={1}
                    className="text-5xl md:text-8xl text-center"
                    words="1+ year of experience working with React, Next.js, and TypeScript."
                />

                <div className="absolute inset-x-0 bottom-10 flex justify-center">
                    <div className="flex flex-col items-center">
                        <ArrowDown className="animate-bounce" />
                        <p>Scroll Down</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="I'm Euger, a software engineer focused on building intuitive web apps with clean code and innovative solutions." />
            </div>
            <div className="flex items-center justify-center">
                <TextRevealByWord text="I'm currently a student, graduating in 2025, while working a part-time dev job and expanding my skills with new technologies." />
            </div>

            <div className="flex items-center justify-center">
                <VelocityScroll
                    text="Keep scrolling"
                    default_velocity={5}
                    className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </div>  

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Over the years, I have acquired several coding certifications that reflect my dedication to continuous learning and professional growth in the field of software development." />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <FocusCardsDemo />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="I appreciate you taking the time to explore our work. If you have any questions or feedback, feel free to reach out!" />
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
