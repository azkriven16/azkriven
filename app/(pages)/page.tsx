import { About } from "@/components/custom/about";
import { Experience } from "@/components/custom/experience";
import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { TechStack } from "@/components/custom/techstack";

export default function Home() {
    return (
        <main>
            <Hero />
            <Experience />
            <Projects />
            <TechStack />
            <About />
        </main>
    );
}
