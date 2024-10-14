import { SOCIALS } from "@/config/site";
import Section from "./section";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <Section className="flex flex-col-reverse md:flex-row items-center justify-between mb-0">
            <p>© 2024 / Selene Yu / Build your portfolio with Once UI</p>
            <div className="pb-5">
                {SOCIALS.map((item) => (
                    <Button key={item.text} size="icon" variant="ghost">
                        <item.Icon className="h-4 w-4" />
                    </Button>
                ))}
            </div>
        </Section>
    );
}
