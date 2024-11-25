import { Experience } from "@/components/custom/experience";
import { Projects } from "@/components/custom/projects";
import { Section } from "@/components/custom/section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Euger Bonete",
    description:
        "Explore my portfolio of software engineering projects and applications.",
};

export default function ProjectsPage() {
    return (
        <>
            <Section>
                <div className=" md:pt-20">
                    <div className="space-y-10 py-10 md:py-20">
                        <h1 className="text-5xl md:text-8xl font-dm">Work</h1>
                        <p className="text-2xl md:w-2/3 leading-normal">
                            I don't just create websites; we craft unforgettable
                            experiences that leave a lasting impression.
                        </p>
                    </div>
                </div>
            </Section>
            <div className="space-y-10">
                <Experience />
                <Projects />
            </div>
        </>
    );
}
