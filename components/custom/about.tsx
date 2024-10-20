import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconMapPin } from "@tabler/icons-react";

export function About() {
    return (
        <section className="space-y-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-5">
                <div className="flex flex-col space-y-5 leading-tight">
                    <h1 className="text-center md:text-left text-2xl md:text-4xl font-roboto font-black">
                        👋 Hello there! I'm Euger
                    </h1>
                    <div className="flex justify-center md:justify-start items-center gap-2 font-semibold text-lg">
                        <IconMapPin />
                        Iloilo, Philippines
                    </div>
                    <p>
                        I'm a full-stack developer that loves building products
                        and web apps that can impact millions of lives
                    </p>
                    <p>
                        I'm a software engineer and student building scalable
                        web apps that are performance optimized and good
                        looking.
                    </p>
                </div>

                <Avatar>
                    <AvatarImage
                        src="https://github.com/azkriven16.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </section>
    );
}
