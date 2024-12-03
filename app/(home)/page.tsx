import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import SmoothScroll from "@/components/smooth-scroll";
import { Hero } from "./_components/hero";
import Logos from "./_components/logos";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="space-y-20 py-10">
                <Hero />
                <Logos />
                <Projects />
                <Contact />
            </main>
        </SmoothScroll>
    );
}
