"use client";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import TextRevealByWord from "@/components/ui/text-reveal";
import WordPullUp from "@/components/ui/word-pull-up";
import { ArrowDown } from "lucide-react";
import { FocusCardsDemo } from "./card-grid";
import { LinkPreviewDemo } from "./link-preview";
import { TimelineDemo } from "./timeline";

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
                <TextRevealByWord text="But fear not! We are here to build amazing experiences for your users & make your brand stand out online." />
            </div>

            <div className="flex items-center justify-center">
                <VelocityScroll
                    text="Welcome to my portfolio"
                    default_velocity={5}
                    className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Welcome to my portfolio, have a look around." />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <LinkPreviewDemo />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <FocusCardsDemo />
            </div>

            <div className="flex items-center justify-center">
                <TextRevealByWord text="Let's work together. Let me help you bring your ideas to reality." />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <LinkPreviewDemo />
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
