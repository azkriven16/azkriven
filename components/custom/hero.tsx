"use client";

import { SITE_CONFIG } from "@/config/site";
import { motion } from "framer-motion";
import { Section } from "./section";

export const Hero = () => {
    return (
        <Section>
            <div className="md:pt-20 space-y-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                    className="text-xl md:text-2xl md:w-2/4 leading-normal"
                >
                    I specialize in crafting exceptional digital experiences
                    using code to help clients achieve their business goals.
                </motion.p>

                <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 md:gap-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                        className="text-4xl md:text-8xl font-dm"
                    >
                        Fullstack Web Developer
                    </motion.h1>
                    <div>
                        <p>{SITE_CONFIG.socials.email}</p>
                        <p className="text-muted-foreground">
                            Based in Philippines
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
