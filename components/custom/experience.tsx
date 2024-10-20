import { EXP } from "@/config/exp";
import Link from "next/link";
import React from "react";

export const Experience = () => {
    return (
        <div className="space-y-5">
            <h3 className="font-bold text-lg">Work Experience</h3>
            <ul className="space-y-10">
                {EXP.map((item) => (
                    <li key={item.company}>
                        <Link
                            href={item.href || "#"}
                            className="font-bold hover:underline"
                            target={item.href ? "_blank" : "_self"}
                        >
                            {item.company}
                        </Link>
                        <p className="font-semibold">{item.role}</p>
                        <p className="font-semibold text-sm">{item.date}</p>
                        <p className="text-sm text-muted-foreground">
                            {item.desc}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
