import { About } from "@/components/custom/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Euger Bonete",
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};

export default function AboutPage() {
    return (
        <main>
            <About />
        </main>
    );
}
