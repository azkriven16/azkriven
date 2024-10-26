import { Projects } from "@/components/custom/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Euger Bonete",
    description:
        "Explore my portfolio of software engineering projects and applications.",
};

export default function ProjectsPage() {
    return (
        <main>
            <Projects />
        </main>
    );
}
