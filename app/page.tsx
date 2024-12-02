import { HeroSection } from "@/components/sections/hero";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="min-h-[200dvh]">
                <HeroSection />
            </main>
        </SmoothScroll>
    );
}
