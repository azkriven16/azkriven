import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import SmoothScroll from "@/components/smooth-scroll";
import { Hero } from "./_components/hero";
import Logos from "./_components/logos";
import { TechStack } from "./_components/techstack";

export default function Work() {
    return (
        <SmoothScroll>
            <main className="space-y-20 py-10">
                <Hero />
                <Logos />
                <Projects />
                <TechStack />
                <Contact />
            </main>
        </SmoothScroll>
    );
}
