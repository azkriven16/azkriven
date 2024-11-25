"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Section } from "./section";

export const Footer = () => {
    return (
        <Section>
            <footer className="py-20 space-y-20 md:mt-20">
                <div className="flex flex-col md:flex-row gap-20 justify-between">
                    <div className="space-y-10">
                        <p className="text-2xl md:w-2/3">
                            Let&apos;s build fast, scalable, and user-friendly
                            websites together.
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
                    Built by Euger Bonete
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
