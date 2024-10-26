import { Experience } from "@/components/custom/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience | Euger Bonete",
    description:
        "Explore my professional journey and work experience as a software engineer.",
};

export default function ExperiencePage() {
    return (
        <main>
            <Experience />
        </main>
    );
}
