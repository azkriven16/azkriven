"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CircleEqual } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed right-4 top-4 lg:hidden z-50">
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button className="h-12 w-12" size="icon" variant="ghost">
                        <CircleEqual className="h-12 w-12" />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <nav className="mt-20">
                        <ul className="flex flex-col justify-center gap-5 w-full uppercase mb-10">
                            {siteConfig.nav.map(({ href, text }) => (
                                <a href={href} onClick={() => setOpen(false)}>
                                    <li
                                        key={text}
                                        className={cn(
                                            buttonVariants({
                                                variant: "ghost",
                                            }),
                                            "w-full"
                                        )}
                                    >
                                        {text}
                                    </li>
                                </a>
                            ))}
                        </ul>

                        <BackgroundGradient className="flex gap-2 justify-center my-5 list-none rounded-b-none">
                            {siteConfig.socials.map((social) => (
                                <li key={social.text}>
                                    <Link
                                        href={social.href}
                                        target="_blank"
                                        className={buttonVariants({
                                            size: "icon",
                                            variant: "ghost",
                                        })}
                                    >
                                        <social.Icon size={20} />
                                    </Link>
                                </li>
                            ))}
                            <ModeToggle />
                        </BackgroundGradient>
                    </nav>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
