"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { siteConfig } from "@/config/site";
import { Box } from "lucide-react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { BackgroundGradient } from "./ui/background-gradient";

export default function DesktopNav() {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "bottom-10 inset-x-0 max-w-5xl mx-auto z-50 fixed hidden lg:block"
            )}
        >
            <BackgroundGradient containerClassName="w-fit">
                <Menu setActive={setActive}>
                    {siteConfig.nav.map((item) => (
                        <Link
                            className="uppercase hover:scale-110 transition ease-in-out"
                            href={item.href}
                        >
                            {item.text}
                        </Link>
                    ))}
                    <ModeToggle />
                </Menu>
            </BackgroundGradient>
        </div>
    );
}
