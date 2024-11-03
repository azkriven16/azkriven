"use client";

import { PROJECTS } from "@/config/projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
    return (
        <AnimatePresence key="projects">
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
                        Featured Projects & Achievements
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-xl text-muted-foreground mb-12"
                    >
                        Showcasing my key projects and technical achievements that demonstrate my expertise and impact.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((item, index) => (
                            <Link
                                href={`/projects/${item.slug}`}
                                key={item.href}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.05 }}
                                    className="flex flex-col p-4 shadow-md border rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                                >
                                    <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src={item.img}
                                            alt={`${item.title} Image`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground flex-grow mb-4">
                                        {item.description.split(".")[0]}.
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
