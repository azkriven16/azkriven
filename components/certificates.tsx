"use client";

import { siteConfig } from "@/config/site";
import { Card } from "./ui/card";
import Link from "next/link";

export default function Certificates() {
    return (
        <section className="space-y-5 text-muted-foreground" id="certificates">
            <h1 className="font-bold uppercase text-foreground">
                Certificates
            </h1>
            <ul>
                {siteConfig.certificates.map(
                    ({ href, text, date, description }) => (
                        <li key={text} className="my-5">
                            <Card className=" p-2 group/cert">
                                <Link
                                    href={href}
                                    target="_blank"
                                    className="flex items-center gap-10 px-2"
                                >
                                    <p className="uppercase font-semibold text-xs">
                                        {date}
                                    </p>
                                    <div className="text-foreground group-hover/cert:text-primary">
                                        <h3>{text}</h3>
                                    </div>
                                </Link>
                            </Card>
                        </li>
                    )
                )}
            </ul>
        </section>
    );
}
