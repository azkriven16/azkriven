import { siteConfig, SOCIALS } from "@/config/site";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Section from "./section";

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
