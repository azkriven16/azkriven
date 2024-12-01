import { Tablets } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModeToggle from "./ui/mode-toggle";
import { Button } from "./ui/button";

export const Navbar = () => {
    return (
        <header>
            <div className="max-w-5xl mx-auto p-5 flex items-center justify-between">
                <Link href="/">
                    <Tablets />
                </Link>

                <nav className="flex items-center gap-5">
                    <Button
                        asChild
                        variant="ghost"
                        className="text-base font-semibold"
                    >
                        <Link href="/">About</Link>
                    </Button>
                    <ModeToggle />
                </nav>
            </div>
        </header>
    );
};
