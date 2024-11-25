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
                        <h1 className="text-4xl md:text-8xl font-semibold">
                            Work Experience
                        </h1>
                        <p className="text-2xl leading-normal md:w-2/3">
                            We don't just create brands; we craft unforgettable
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
