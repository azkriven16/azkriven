import { Metadata } from "next";
import { HomeComponent } from "./_components/home";

export const metadata: Metadata = {
    title: "Home | Euger Bonete",
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};
export default function Home() {
    return <HomeComponent />;
}
