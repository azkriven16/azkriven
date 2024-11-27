import { Metadata } from "next";
import { AboutComponent } from "./_components/about";

export const metadata: Metadata = {
    title: "About | Euger Bonete",
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};
export default function About() {
    return <AboutComponent />;
}
