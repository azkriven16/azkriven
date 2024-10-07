import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MapPin } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-full h-full">
            <div className="lg:fixed">
                <h1 className="text-4xl font-black tracking-wide sm:text-5xl pb-1">
                    {siteConfig.author}
                </h1>
                <h3 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
                    Front-End Engineer / Developer
                </h3>
                <p className="mt-4 max-w-xs leading-normal text-muted-foreground flex gap-2">
                    <MapPin />
                    Developer from Iloilo, Philippines
                </p>

                <nav className="mt-20">
                    <ul className="flex gap-2 mt-20">
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
                </nav>
            </div>
        </div>
    );
}
