"use client";

import { ChevronRight, Sigma } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ModeToggle from "./ui/mode-toggle";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    return (
        <header className="sticky top-5">
            <div className="flex justify-between items-center mx-auto bg-gradient-to-r from-transparent via-background to-transparent rounded-full p-4 max-w-4xl">
                <Link href="/" className="font-semibold flex items-center">
                    <Button size="icon" className="h-8 w-8">
                        <Sigma />
                    </Button>
                    ugerBonete
                </Link>

                <nav className="flex items-center gap-2">
                    <NavLink href="/" text="Home" />
                    <NavLink href="/work" text="Work" />
                    <NavLink href="/about" text="About" />
                </nav>
                <div className="flex items-center gap-5">
                    <ModeToggle />
                    <Button className="rounded-full text-sm font-semibold">
                        Lets Connect <ChevronRight />
                    </Button>
                </div>
            </div>
        </header>
    );
};

function NavLink({ text, href }: { text: string; href: string }) {
    const pathname = usePathname();
    return (
        <Button
            asChild
            variant={pathname !== href ? "linkHover2" : "linkHover1"}
        >
            <Link href={href}>{text}</Link>
        </Button>
    );
}
