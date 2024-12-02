import { HeroSection } from "@/components/sections/hero";
import Logos from "@/components/sections/logos";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="min-h-[200dvh] space-y-20">
                <HeroSection />
                <Logos />
            </main>
        </SmoothScroll>
    );
}
