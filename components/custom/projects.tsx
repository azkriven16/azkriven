"use client";

import { PROJECTS } from "@/config/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Section } from "./section";

export const Projects = () => {
    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {PROJECTS.map((item, index) => (
                    <Link
                        href={`/projects/${item.slug}`}
                        key={item.href}
                        className="flex flex-col gap-5 group"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                            className="flex flex-col h-full p-4 shadow-md border rounded-lg cursor-pointer hover:shadow-lg transition-shadow relative bg-secondary"
                        >
                            <div className="absolute top-4 left-4 hidden group-hover:flex z-10">
                                <Button size="icon" className="rounded-full">
                                    <motion.div
                                        whileInView={{ rotate: -30 }}
                                        transition={{
                                            delay: 0.1,
                                        }}
                                    >
                                        <ArrowRight className="" />
                                    </motion.div>
                                </Button>
                            </div>
                            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={item.img}
                                    alt={`${item.title} Image`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </motion.div>
                        <div className="flex gap-2">
                            <p>{item.title}</p>
                            <ArrowRight className="-rotate-45" />
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};
