import { EXP } from "@/config/exp";
import Link from "next/link";
import React from "react";

export const Experience = () => {
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold  mb-8">
                    My Professional Journey
                </h2>
                <p className="text-xl text-muted-foreground  mb-12">
                    Explore my tech-related work experience and achievements.
                </p>

                <div className="space-y-12">
                    {EXP.map((item) => (
                        <div
                            key={item.company}
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
