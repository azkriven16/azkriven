"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import FluidCursor from "../ui/fluid-cursor";
import { Button } from "../ui/button";

export const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden md:pt-20">
            <FluidCursor />
            {/* Hero Content */}
            <motion.div className="relative z-10 flex flex-col gap-5 md:gap-7 justify-center items-center h-full text-center px-4">
                {/* Subtitle */}
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="text-sm md:text-lg md:tracking-widest mx-auto uppercase font-semibold"
                    >
                        <Balancer>
                            Hey! I'm Euger, a software developer.
                        </Balancer>
                    </motion.p>
                </div>
                {/* Name and Title */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-[3.5rem] font-black leading-tight"
                    >
                        <Balancer>{`Crafting 🔨 websites 🌐 with precision 📐 , one <div> at a time ⌚`}</Balancer>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="text-base md:text-lg md:tracking-wide text-muted-foreground mx-auto"
                    >
                        <Balancer>
                            Worked with 2 companies, 1+ year of experience
                            working with React, Next.js, and TypeScript.
                            Currently a student, graduating in 2025, while
                            working a part-time dev.
                        </Balancer>
                    </motion.p>
                </div>
                <Button className="rounded-full h-20 text-xl p-10 mt-10">
                    🤔 Have a project? Lets talk
                </Button>
            </motion.div>
        </div>
    );
};
