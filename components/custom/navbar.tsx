"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    IconMenu2,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconMail,
    IconPicnicTable,
} from "@tabler/icons-react";
import { Drawer } from "@/components/ui/drawer";
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <nav className="py-4 px-6 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <IconPicnicTable />
                    zkriven
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
                            <IconMenu2 className="cursor-pointer" />
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="p-6 space-y-6">
                                <div className="flex justify-center mb-6">
                                    <Link
                                        href="/"
                                        className="flex items-center"
                                    >
                                        <IconPicnicTable />
                                        zkriven
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-start text-lg"
                                    >
                                        <Link href="/">Home</Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-start text-lg"
                                    >
                                        <Link href="/about">About</Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-start text-lg"
                                    >
                                        <Link href="/experience">
                                            Experience
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-start text-lg"
                                    >
                                        <Link href="/projects">Projects</Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-start text-lg"
                                    >
                                        <Link href="/techstack">
                                            Tech Stack
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex justify-center space-x-4 mt-6">
                                    <Link
                                        href="https://github.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconBrandGithub className="w-6 h-6" />
                                    </Link>
                                    <Link
                                        href="https://linkedin.com/in/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconBrandLinkedin className="w-6 h-6" />
                                    </Link>
                                    <Link
                                        href="https://facebook.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconBrandFacebook className="w-6 h-6" />
                                    </Link>
                                    <Link href="mailto:youremail@example.com">
                                        <IconMail className="w-6 h-6" />
                                    </Link>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </nav>
    );
};
