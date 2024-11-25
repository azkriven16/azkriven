import WordPullUp from "@/components/ui/word-pull-up";
import { Metadata } from "next";
import { FocusCardsDemo } from "../(home)/_components/card-grid";

export const metadata: Metadata = {
    title: "Work | Euger Bonete",
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};
export default function Work() {
    return (
        <div className="p-4">
            <div className="flex items-center justify-center min-h-screen relative">
                <WordPullUp
                    delayMultiple={1}
                    className="text-5xl md:text-8xl text-center"
                    words="1+ year of experience working with React, Next.js, and TypeScript. "
                />
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <FocusCardsDemo />
            </div>
        </div>
    );
}
