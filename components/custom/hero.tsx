"use client";

import { Button } from "@/components/ui/button";
import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandLinkedin,
    IconChevronRight,
    IconMail,
    IconMapPin,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export const Hero = () => {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center min-h-screen pb-52 md:pb-0"
            >
                <div className="max-w-4xl text-center px-4 space-y-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                        className="text-4xl md:text-6xl font-semibold"
                    >
                        Unleashing creative <br /> potential on the web!
                    </motion.h1>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                        className="flex justify-center"
                    >
                        <a
                            className="inline-flex items-center gap-x-2 border-2 text-sm p-1 ps-3 rounded-full transition"
                            href="#"
                        >
                            {SITE_CONFIG.address}
                            <IconMapPin />
                        </a>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        Hi, I'm{" "}
                        <span className="text-foreground">
                            Euger (azkriven)
                        </span>
                        - a software engineer crafting web experiences since
                        2020.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.2 }}
                        className="flex justify-center space-x-4"
                    >
                        <Button asChild variant="shine">
                            <Link
                                href="/projects"
                                className="flex items-center"
                            >
                                See my work
                                <IconChevronRight className="ml-2" size={18} />
                            </Link>
                        </Button>

                        <Button asChild variant="secondary">
                            <Link href="/about">About Me</Link>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.2 }}
                        className="flex justify-center space-x-4 mt-4"
                    >
                        <Button asChild variant="ghost" size="icon">
                            <Link
                                href={SITE_CONFIG.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandGithub size={24} />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link
                                href={SITE_CONFIG.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandLinkedin size={24} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link
                                href={SITE_CONFIG.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandFacebook size={24} />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link
                                href={`mailto:${SITE_CONFIG.socials.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconMail size={24} />
                                <span className="sr-only">Email</span>
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};
