"use client";

import { About } from "@/components/custom/about";
import { Experience } from "@/components/custom/experience";
import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { TechStack } from "@/components/custom/techstack";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo(0, 0);
        };

        handleScrollToTop();
    }, []);

    return (
        <main>
            <Hero />
            <Experience />
            <Projects />
            <TechStack />
            <About />
        </main>
    );
}
