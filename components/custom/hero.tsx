"use client";

import { SITE_CONFIG } from "@/config/site";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center md:pb-0"
        >
            <div className="max-w-6xl px-4 space-y-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                    className="text-xl md:w-2/4 leading-normal"
                >
                    I&apos;m Euger, a frontend developer focused on building
                    high-performance, accessible, and visually appealing web
                    experiences since 2021.
                </motion.p>

                <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 md:gap-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                        className="text-4xl md:text-8xl"
                    >
                        <span className="relative inline-block">
                            Frontend Web Developer
                        </span>
                    </motion.h1>
                    <div>
                        <p>{SITE_CONFIG.socials.email}</p>
                        <p className="text-muted-foreground">
                            Based in Philippines
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
