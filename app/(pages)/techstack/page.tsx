import { TechStack } from "@/components/custom/techstack";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tech Stack | Euger Bonete",
    description:
        "Explore the technologies and tools I use in my software development projects.",
};

export default function TechStackPage() {
    return (
        <div>
            <TechStack />
        </div>
    );
}
