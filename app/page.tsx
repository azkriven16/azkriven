import { Contact } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { IntroHero } from "@/components/sections/intro";
import Logos from "@/components/sections/logos";
import ProjectGrid from "@/components/sections/projects";
import { TimelineDemo } from "@/components/sections/timeline";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="space-y-20 py-10">
                <IntroHero />
                <HeroSection />
                <Logos />
                <ProjectGrid />
                {/* <BentoDemo /> */}
                {/* <ServicesGrid /> */}
                {/* <Quotes /> */}
            </main>
            <TimelineDemo />
            <Contact />
        </SmoothScroll>
    );
}
