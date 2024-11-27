import { Metadata } from "next";
import { HomeComponent } from "./_components/home";
import { SITE_CONFIG } from "@/config";

export const metadata: Metadata = {
    title: `${SITE_CONFIG.name}'s Portfolio ⁠- NISU | CICS`,
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};
export default function Home() {
    return <HomeComponent />;
}
