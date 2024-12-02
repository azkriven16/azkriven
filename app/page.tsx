import { HeroSection } from "@/components/sections/hero";
import React from "react";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="min-h-[200dvh]">
                <HeroSection />
                <div className="bg-accent h-[100vh] rounded-lg mx-5"></div>
            </main>
        </SmoothScroll>
    );
}
