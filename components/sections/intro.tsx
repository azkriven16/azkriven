"use client";

import React, { useState, useEffect } from "react";
import TextRevealByWord from "@/components/ui/text-reveal";
import { motion } from "framer-motion";

export const IntroHero = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < window.innerHeight / 2);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="z-10 space-y-6 max-w-3xl">
                <TextRevealByWord text="Got an incredible idea waiting to shine but don't know where to begin?" />
                <TextRevealByWord text="Together, we can turn your vision into reality and craft something truly extraordinary!" />
            </div>

            {isAtTop && <ScrollIndicator />}
        </motion.div>
    );
};

const ScrollIndicator = () => {
    return (
        <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
        >
            <motion.div
                className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <motion.div
                    className="w-1 h-2 bg-gray-400 rounded-full mx-auto"
                    animate={{ y: [0, 16, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
            <motion.span
                className="mt-2 text-sm font-medium text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Scroll
            </motion.span>
        </motion.div>
    );
};
