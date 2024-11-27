"use client";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import TextRevealByWord from "@/components/ui/text-reveal";
import WordPullUp from "@/components/ui/word-pull-up";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Certificates } from "./certificates";
import Link from "next/link";

export const ContactComponent = () => {
    return (
        <main className="p-4">
            <div className="flex items-center justify-center min-h-screen relative">
                <WordPullUp
                    delayMultiple={1}
                    className="text-5xl md:text-8xl text-center"
                    words="Let's Connect"
                />
            </div>
            <div className="flex items-center justify-center">
                <TextRevealByWord text="You can reach me through any of these platforms. I'm always open to new opportunities and discussions, and I'd be happy to hear from you!" />
            </div>
            <div className="space-y-5 flex justify-center">
                <div className="space-x-10 text-2xl">
                    <Link
                        target="_blank"
                        href="https://www.facebook.com/euger.bonete.9"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>Facebook</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>

                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/euger-bonete/"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>LinkedIn</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>

                    <Link
                        target="_blank"
                        href="https://github.com/azkriven16"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>Github</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>
                    <Link
                        target="_blank"
                        href="mailto:azkriven16"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>Email</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>
                </div>
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
