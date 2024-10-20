import { PROJECTS } from "@/config/projects";
import Image from "next/image";

export const Projects = () => {
    return (
        <div className="space-y-5">
            <h3 className="font-semibold text-lg">What I've been working on</h3>

            <ul className="space-y-5">
                {PROJECTS.map((item) => (
                    <li
                        key={item.href}
                        className="flex flex-col md:flex-row items-start gap-5"
                    >
                        <div className="relative aspect-video h-32 rounded-md overflow-hidden">
                            <Image
                                src={item.imgDark}
                                alt={`${item.title} Image`}
                                fill
                            />
                        </div>
                        <div className="space-y-5">
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground capitalize">
                                {item.description}
                            </p>
                            <div className="space-x-5 text-xs text-muted-foreground">
                                <span>Nextjs</span>
                                <span>Tailwindcss</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
