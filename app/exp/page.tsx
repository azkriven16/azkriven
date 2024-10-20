import { Experience } from "@/components/custom/experience";
import Section from "@/components/custom/section";

export default function ExperiencePage() {
    return (
        <Section>
            <h1 className="text-left text-2xl md:text-4xl font-roboto font-black mb-5">
                ⚡ Work Experience
            </h1>
            <Experience />
        </Section>
    );
}
