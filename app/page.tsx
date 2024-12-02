import { HeroSection } from "@/components/sections/hero";
import Logos from "@/components/sections/logos";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="space-y-20 py-10">
                <HeroSection />
                <Logos />
            </main>
        </SmoothScroll>
    );
}
