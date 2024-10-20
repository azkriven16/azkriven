import { About } from "@/components/custom/about";
import { Experience } from "@/components/custom/experience";
import { Projects } from "@/components/custom/projects";
import { TechStack } from "@/components/custom/stack";

export default function Home() {
    return (
        <div className="flex flex-col space-y-20">
            <About />
            <Projects />
            <Experience />
            <TechStack />
        </div>
    );
}
