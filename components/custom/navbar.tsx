"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { Drawer } from "@/components/ui/drawer";
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <nav className="py-4 px-6 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Euger
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Button asChild variant="ghost">
                        <Link href="/">Home</Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/about">About</Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/experience">Experience</Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/projects">Projects</Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/techstack">Tech Stack</Link>
                    </Button>
                </div>
                <div className="md:hidden">
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <DrawerTrigger asChild>
                            <Button variant="outline" size="icon">
                                <IconMenu2 />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="p-4 space-y-2">
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full"
                                >
                                    <Link href="/">Home</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full"
                                >
                                    <Link href="/about">About</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full"
                                >
                                    <Link href="/experience">Experience</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full"
                                >
                                    <Link href="/projects">Projects</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full"
                                >
                                    <Link href="/techstack">Tech Stack</Link>
                                </Button>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </nav>
    );
};
