"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

export const Footer = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <footer className="py-20 space-y-20 md:mt-20">
                <div className="flex flex-col md:flex-row gap-20 justify-between">
                    <div className="space-y-10">
                        <p className="text-2xl md:w-2/3">
                            Let&apos;s build fast, scalable, and user-friendly
                            websites together.
                        </p>
                        <Button className="rounded-full" size="lg" asChild>
                            <Link href="/contact">Contact Me</Link>
                        </Button>
                    </div>
                    <div className="flex  gap-20">
                        {/* <div className="flex flex-col">
                            <span className="text-sm uppercase mb-5 pl-4">
                                navigation
                            </span>
                            <Navlink href="/" text="Home" />
                            <Navlink href="/" text="About" />
                            <Navlink href="/" text="Work" />
                        </div> */}
                        <div className="flex flex-col">
                            <span className="text-sm uppercase mb-5 pl-4">
                                socials
                            </span>
                            <Navlink
                                href="https://www.facebook.com/euger.bonete.9"
                                text="Facebook"
                            />
                            <Navlink
                                href="https://www.linkedin.com/in/euger-bonete/"
                                text="LinkedIn"
                            />

                            <Navlink
                                href="https://github.com/azkriven16"
                                text="Github"
                            />
                            <Navlink href="mailto:azkriven16" text="Email" />
                        </div>
                    </div>
                </div>
                <p className="text-base text-muted-foreground">
                    Built by{" "}
                    <span className="text-foreground">Euger Bonete</span>
                </p>
            </footer>
        </div>
    );
};

function Navlink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            target="_blank"
            href={href}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-base justify-start"
            )}
        >
            {text}
        </Link>
    );
}
