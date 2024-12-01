import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto p-5 flex flex-col gap-5 items-start justify-between border-t border-primary">
            <p className="text-muted-foreground">@ 2024 Euger Bonete Jr.</p>
            <p className="text-3xl">Get in touch</p>
            <div className="flex gap-2">
                <FooterLink href="" text="Facebook" />
                <FooterLink href="" text="Github" />
                <FooterLink href="" text="LinkedIn" />
            </div>
        </footer>
    );
};

function FooterLink({ href, text }: { href: string; text: string }) {
    return (
        <Button asChild variant="link" className="p-0 text-base">
            <Link href={href}>{text}</Link>
        </Button>
    );
}
