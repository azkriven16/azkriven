"use client";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGmail,
    IconBrandLinkedin,
    IconBrandMessenger,
    IconAlertSmallOff,
    IconTexture,
    IconUserCircle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { Footer } from "./footer";

export function SidebarComponent({ children }: PropsWithChildren) {
    const links = [
        {
            label: "Home",
            href: "/",
            icon: (
                <IconUserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Experience",
            href: "/exp",
            icon: (
                <IconTexture className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Works",
            href: "/works",
            icon: (
                <Layers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "About Me",
            href: "/about",
            icon: (
                <IconUserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const socials = [
        {
            label: "Messenger",
            href: "https://www.facebook.com/euger.bonete.9",
            icon: (
                <IconBrandMessenger className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Github",
            href: "https://github.com/azkriven16",
            icon: (
                <IconBrandGithub className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Email",
            href: "mailto:your-azkriven16@gmail.com", // Change to your actual email address
            icon: (
                <IconBrandGmail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/euger.bonete/",
            icon: (
                <IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];

    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row w-full flex-1 max-w-7xl mx-auto",
                ""
            )}
        >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
                <SidebarBody className="justify-between gap-10 fixed">
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <Logo />
                        <div className="mt-8 flex flex-col gap-2">
                            <h4 className="text-sm">Navigation</h4>
                            {links.map((link, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setOpen(false)}
                                >
                                    <SidebarLink link={link} />
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-col gap-2">
                            <h4 className="text-sm">Socials</h4>
                            {socials.map((link, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setOpen(false)}
                                >
                                    <SidebarLink link={link} />
                                </button>
                            ))}
                        </div>
                    </div>
                    <ModeToggle />
                </SidebarBody>
            </Sidebar>
            <div className="flex flex-col flex-1 p-2 md:ml-[200px]">
                {children}
                <Footer />
            </div>
        </div>
    );
}
export const Logo = () => {
    return (
        <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <IconAlertSmallOff className="text-foreground" />

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                Euger Bonete
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <IconAlertSmallOff />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                <div className="flex gap-2">
                    {[...new Array(4)].map((i) => (
                        <div
                            key={"first-array" + i}
                            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={"second-array" + i}
                            className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};
