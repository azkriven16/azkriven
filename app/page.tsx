import { About } from "@/components/custom/about";
import { Experience } from "@/components/custom/experience";
import { Projects } from "@/components/custom/projects";
import Section from "@/components/custom/section";
import { TechStack } from "@/components/custom/stack";

export default function Home() {
    return (
        <Section className="flex flex-col space-y-10">
            <About />
            <Projects />
            <Experience />
            <TechStack />
        </Section>
    );
}
