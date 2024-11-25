"use client";

import { Experience } from "@/components/custom/experience";
import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { Section } from "@/components/custom/section";
import { TechStack } from "@/components/custom/techstack";
import { FadeText } from "@/components/ui/fade-text";
import useScrollToTop from "@/hooks/scroll-to-top";

export const HomeComponent = () => {
    useScrollToTop();

    return (
        <main className="mt-20 py-10 md:py-20 space-y-20 md:space-y-40">
            <Hero />
            <Projects />
            <Section>
                <div className="space-y-20 md:space-y-40">
                    <FadeText
                        className="text-2xl md:text-4xl"
                        text=" I strive to bring innovation and creativity to every
                        project I undertake. Our team of experts works closely
                        with our clients to understand their needs and deliver
                        outstanding solutions. I are dedicated to creating
                        products that exceed our clients' expectations."
                    />
                    <p></p>
                    <TechStack />
                </div>
            </Section>
        </main>
    );
};
