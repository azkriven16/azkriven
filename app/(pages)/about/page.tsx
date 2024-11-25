import { About } from "@/components/custom/about";
import { Section } from "@/components/custom/section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Euger Bonete",
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};

export default function AboutPage() {
    return (
        <>
            <Section>
                <div className="md:py-20">
                    <div className="space-y-10 py-10 md:py-20">
                        <h1 className="text-4xl md:text-8xl font-semibold">
                            About
                        </h1>
                        <p className="text-2xl leading-normal md:w-2/3">
                            Hi, I'm Euger, a dedicated software engineer
                            crafting intuitive and functional web applications
                            with a passion for clean code and innovative
                            solutions.
                        </p>
                    </div>
                </div>
            </Section>
            <About />
        </>
    );
}
