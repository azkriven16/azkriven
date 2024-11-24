"use client";
import {
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandFramer,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Section } from "./section";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const Footer = () => {
    return (
        <Section>
            <footer className="py-20 space-y-20">
                <div className="flex flex-col md:flex-row gap-20 justify-between">
                    <div className="space-y-10">
                        <p className="text-2xl md:w-2/3">
                            We specialize in crafting exceptional digital
                            experiences to help our clients achieve their
                            business goals.
                        </p>
                        <Button className="rounded-full" size="lg">
                            Contact Me
                        </Button>
                    </div>
                    <div className="flex  gap-20">
                        <div className="flex flex-col">
                            <span className="text-sm uppercase mb-5">
                                navigation
                            </span>
                            <Navlink href="/" text="Home" />
                            <Navlink href="/" text="About" />
                            <Navlink href="/" text="Work" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm uppercase mb-5">
                                socials
                            </span>
                            <Navlink href="/" text="Facebook" />
                            <Navlink href="/" text="Gmail" />
                            <Navlink href="/" text="Github" />
                        </div>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">
                    Framer template crafted with love by Dawid Pietrasiak
                </p>
            </footer>
        </Section>
    );
};

function Navlink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            className={cn(
                buttonVariants({ variant: "linkHover2" }),
                "text-base justify-start p-0"
            )}
        >
            {text}
        </Link>
    );
}
