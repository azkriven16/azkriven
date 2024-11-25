import { Metadata } from "next";
import { FocusCardsDemo } from "../(home)/_components/card-grid";
import TextRevealByWord from "@/components/ui/text-reveal";
import { ArrowDown } from "lucide-react";
import WordPullUp from "@/components/ui/word-pull-up";

export const metadata: Metadata = {
    title: "About | Euger Bonete",
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};
export default function About() {
    return (
        <div className="p-4">
            <div className="flex items-center justify-center min-h-screen relative">
                <WordPullUp
                    delayMultiple={1}
                    className="text-5xl md:text-8xl text-center"
                    words="Graduating in 2025, working a part-time dev job."
                />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <FocusCardsDemo />
            </div>
        </div>
    );
}
