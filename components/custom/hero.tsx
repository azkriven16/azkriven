"use client";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { IconChevronRight, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="absolute bottom-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
            ></motion.div>
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
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Hi. I'm {SITE_CONFIG.name}
                        <br />A{" "}
                        <span className="relative inline-block">
                            web developer
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-16 left-0 w-full h-[8px]"
                                viewBox="0 0 400 10" // Adjust the viewbox size based on your design
                                fill="none"
                            >
                                <motion.path
                                    d="M0,5 C100,0 150,10 200,5 C250,0 300,10 400,5" // Squiggly line path
                                    stroke="currentColor" // Use the current text color for the line
                                    strokeWidth="4"
                                    initial={{
                                        pathLength: 0,
                                        strokeDasharray: 400, // Length of the path
                                        strokeDashoffset: 400, // Initially hide the stroke
                                    }}
                                    animate={{
                                        pathLength: 1, // Reveal the full path
                                        strokeDashoffset: 0, // Animate from hidden to visible
                                    }}
                                    transition={{
                                        duration: 1, // Duration of the animation
                                        ease: "easeInOut", // Smooth easing
                                        delay: 0.5, // Delay before starting the animation
                                    }}
                                />
                            </motion.svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.2 }}
                        className="text-xl text-muted-foreground pt-5"
                    >
                        Designing and developing interactive, visually
                        captivating websites that focus on usability,
                        performance, and overall user satisfaction since 2021.
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                        className="flex justify-center"
                    >
                        <a
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent"
                            href="#"
                        >
                            <span className="mr-2 flex shrink-0 border-r border-white pr-2">
                                <IconMapPin />
                            </span>
                            {SITE_CONFIG.address}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.2 }}
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
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};
