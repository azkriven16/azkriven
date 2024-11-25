"use client";

import { Experience } from "@/components/custom/experience";
import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { Section } from "@/components/custom/section";
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
        <main className="space-y-10 md:space-y-40 py-10 md:py-20">
            <Hero />
            <div className="space-y-10">
                <Experience />
                <Projects />
            </div>
            <Section>
                <div className="space-y-20">
                    <p className="text-2xl md:text-3xl leading-normal">
                        I strive to bring innovation and creativity to every
                        project we undertake. Our team of experts works closely
                        with our clients to understand their needs and deliver
                        outstanding solutions. We are dedicated to creating
                        products that exceed our clients' expectations.
                    </p>
                    <TechStack />
                </div>
            </Section>
        </main>
    );
}
