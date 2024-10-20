import { Projects } from "@/components/custom/projects";
import Section from "@/components/custom/section";

export default function Works() {
    return (
        <Section>
            <h1 className="text-2xl md:text-4xl font-roboto font-black mb-5">
                🔥 Selected Works
            </h1>
            <Projects />
        </Section>
    );
}
