import { BentoDemo } from "@/components/sections/bento-grid";
import { HeroSection } from "@/components/sections/hero";
import Logos from "@/components/sections/logos";
import { Quotes } from "@/components/sections/quotes";
import { ServicesGrid } from "@/components/sections/services";
import SmoothScroll from "@/components/smooth-scroll";
import { TimelineLayout } from "@/components/ui/timeline-layout";
import { timelineData } from "@/lib/constants";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="space-y-20 py-10">
                <HeroSection />
                <Logos />
                <BentoDemo />
                {/* <ServicesGrid /> */}
                <TimelineLayout items={timelineData} />
                <Quotes />
            </main>
        </SmoothScroll>
    );
}
