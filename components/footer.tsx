import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="max-w-4xl mx-auto p-5 flex flex-col md:flex-row gap-5 items-start justify-between">
            <p className="tracking-wide">Built with 🔥 by Euger</p>
            <p className="tracking-wide">© 2024 All rights reserved.</p>
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
