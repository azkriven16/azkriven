"use client";

import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";
import { Blocks, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
    const path = usePathname();
    console.log(path);
    return (
        <div
            className={cn(
                "z-50 bottom-5 md:bottom-auto md:top-5 inset-x-0 container mx-auto fixed flex items-center justify-between"
            )}
        >
            <div className="hidden lg:flex items-center gap-2 text-sm">
                <Blocks className="h-4 w-4" /> {SITE_CONFIG.name}
            </div>

            <nav className="flex justify-center gap-5 border w-fit px-2 py-2 rounded-xl h-10 bg-background">
                {NAV_ITEMS.map((item) => (
                    <Link
                        className={cn(
                            "flex items-center gap-2 hover:border transition-all ease-in-out rounded-xl px-2 py-1 text-sm",
                            path === item.href && "border border-primary"
                        )}
                        href={item.href}
                    >
                        <item.icon className="h-8 w-8 md:h-4 md:w-4" />
                        <span className="hidden md:inline">{item.text}</span>
                    </Link>
                ))}
            </nav>
            <ModeToggle />
        </div>
    );
}
