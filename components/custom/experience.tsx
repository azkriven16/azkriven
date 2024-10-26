"use client";

import { EXP } from "@/config/exp";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Experience = () => {
    return (
        <AnimatePresence key="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="py-16"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-8"
                    >
                        My Professional Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-xl text-muted-foreground mb-12"
                    >
                        Explore my tech-related work experience and
                        achievements.
                    </motion.p>

                    <div className="space-y-12">
                        {EXP.map((item, index) => (
                            <motion.div
                                key={item.company}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.05 }}
                                className="border rounded-lg p-6 shadow-md"
                            >
                                <Link
                                    href={item.href || "#"}
                                    className="text-2xl font-bold hover:underline block mb-2"
                                    target={item.href ? "_blank" : "_self"}
                                >
                                    {item.company}
                                </Link>
                                <p className="text-lg font-semibold text-primary mb-1">
                                    {item.role}
                                </p>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {item.date}
                                </p>
                                <p className="text-base text-muted-foreground">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
