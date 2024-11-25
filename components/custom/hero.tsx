import { SITE_CONFIG } from "@/config/site";
import { FadeText } from "../ui/fade-text";
import { Section } from "./section";

export const Hero = () => {
    return (
        <Section>
            <div className="py-10 md:pt-20 space-y-10">
                <div className="w-[90%] md:w-2/4 ">
                    <FadeText
                        text="I specialize in crafting exceptional digital experiences
                    using code to help clients achieve their business goals."
                        className="text-xl md:text-2xl leading-normal"
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 md:gap-0">
                    <FadeText
                        text="Fullstack Web Developer"
                        className="text-5xl md:text-8xl"
                    />

                    <div>
                        <p>{SITE_CONFIG.socials.email}</p>
                        <p className="text-muted-foreground">
                            Based in Philippines
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
