import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MapPin } from "lucide-react";
import WordRotate from "./ui/word-rotate";

export default function Sidebar() {
    return (
        <div className="w-full h-full">
            <div className="lg:fixed">
                <h1 className="text-4xl font-black tracking-wide sm:text-5xl pb-1">
                    {siteConfig.author}
                </h1>
                <WordRotate
                    className="mt-3 text-lg font-medium tracking-tight sm:text-xl"
                    words={[
                        "is a cool web developer",
                        "a manga/manhwa/novel reader",
                        "also an anime fan and",
                        "a man of culture ( ͡° ͜ʖ ͡°)",
                    ]}
                />
                <p className="mt-4 max-w-xs leading-normal text-muted-foreground flex gap-2">
                    <MapPin />
                    Developer from Iloilo, Philippines
                </p>

                <ul className="flex items-center gap-2 mt-20">
                    Let's talk
                    {siteConfig.socials.map((social) => (
                        <li key={social.text}>
                            <Link
                                href={social.href}
                                target="_blank"
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <social.Icon size={20} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
