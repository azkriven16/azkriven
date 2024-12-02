"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import FluidCursor from "../ui/fluid-cursor";

export const HeroSection = () => {
    return (
        <div className="relative h-[80vh] md:h-screen w-full overflow-hidden md:pt-20">
            <FluidCursor />
            {/* Hero Content */}
            <motion.div className="relative z-10 flex flex-col gap-5 justify-center items-center h-full text-center px-4">
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
                        <Balancer>{`Crafting websites with precision, one <div> at a time`}</Balancer>
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
                        className="text-base md:text-lg tracking-wide text-muted-foreground mx-auto"
                    >
                        <Balancer>
                            I've worked with 2 companies, I've gained 1+ year of
                            experience working with React, Next.js, and
                            TypeScript. I'm currently a student, graduating in
                            2025, while working a part-time dev job.
                        </Balancer>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};