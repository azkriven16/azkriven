"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { TechStack } from "./techstack";
import { CERTS } from "@/config";
import { ArrowRight, Circle, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { IconCircleFilled } from "@tabler/icons-react";

export const About = () => {
    return (
        <Section>
            <div className="flex flex-col gap-20 md:gap-40">
                <TechStack />
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <h3 className="text-3xl md:text-5xl md:leading-[60px]">
                        Web Development <br /> Certifications
                    </h3>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.2 }}
                        className="flex flex-col items-start gap-5 md:w-2/5"
                    >
                        {CERTS.map((data) => {
                            return (
                                <li
                                    key={data.href}
                                    className={cn(
                                        buttonVariants({
                                            variant: "linkHover2",
                                        }),
                                        "text-xl md:text-2xl font-normal after:w-[90%] gap-2 md:gap-5"
                                    )}
                                >
                                    <IconCircleFilled className="h-2 w-2" />
                                    {data.text} Certification
                                </li>
                            );
                        })}
                    </motion.ul>
                </div>
                <h3 className="md:text-6xl">
                    We believe that it is possible to live in a world where
                    every product or service is designed with an easy-to-use
                    experience in mind
                </h3>
                {/* <div className="space-y-12">
                            <div className="flex flex-col gap-12 ">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.2,
                                    }}
                                    className="space-y-6"
                                >
                                    <h3 className="font-semibold text-xl">
                                        Education
                                    </h3>
                                    <div className="space-y-4">
                                        {EDUCATION.map((edu, index) => (
                                            <div key={index}>
                                                <p className="font-semibold">
                                                    {edu.degree}
                                                </p>
                                                <p className="text-muted-foreground">
                                                    {edu.school}, {edu.year}
                                                </p>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.45,
                                        duration: 0.2,
                                    }}
                                    className="space-y-6"
                                >
                                    <h3 className="font-semibold text-xl">
                                        Certifications
                                    </h3>
                                    <ul className="space-y-4">
                                        {CERTS.map((item, index) => (
                                            <motion.li
                                                key={item.text}
                                                initial={{
                                                    opacity: 0,
                                                    y: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.5 + index * 0.05,
                                                    duration: 0.2,
                                                }}
                                                className="space-y-2"
                                            >
                                                <Link
                                                    href={item.href}
                                                    target="_blank"
                                                    className="font-semibold underline"
                                                >
                                                    {item.text}
                                                </Link>
                                                <p className="text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div> */}
            </div>
        </Section>
    );
};
