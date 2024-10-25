import { About } from "@/components/custom/about";
import { Experience } from "@/components/custom/experience";
import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { TechStack } from "@/components/custom/tech-stack";

export default function Home() {
    return (
        <main>
            {/* Gradient bg */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
            </div>

            <Hero />
            <Experience />
            <TechStack />
            <Projects />
            <About />
        </main>
    );
}
