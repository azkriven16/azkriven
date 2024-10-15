"use client";

import Section from "@/components/section";
import AvatarCircles from "@/components/ui/avatar-circles";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { BLOG, PROJECTS } from "@/config/site";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Work() {
    return (
        // <div>
        //     <Section className="md:mt-32">
        //         <h1 className="text-4xl md:text-6xl font-pixel font-black">
        //             Writing about web development and tech...
        //         </h1>
        //     </Section>

        //     <Section>
        //         <ul className="grid gap-y-10 list-disc ml-10 ">
        //             {BLOG.map((item) => (
        //                 <li key={item.title} className="space-y-5">
        //                     <h3 className="text-2xl font-semibold">
        //                         {item.title}
        //                     </h3>
        //                     <p>{item.date}</p>
        //                 </li>
        //             ))}
        //         </ul>
        //     </Section>
        // </div>
        <Section className="py-10">
            <div className="text-center bg-primary rounded-3xl py-5">
                Coming soon!
            </div>
        </Section>
    );
}
