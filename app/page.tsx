import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <main className="max-w-5xl mx-auto p-5 flex flex-col items-start gap-24 min-h-[100dvh] md:my-10">
            <section className="flex flex-col gap-10 w-full">
                <h1 className="text-3xl md:text-4xl leading-[1.2] md:leading-[1.5] md:w-4/5">
                    Hey! I’m Euger, a frontend web developer based in Iloilo,
                    Philippines. I’m currently crafting experiences at{" "}
                    <span className="font-bold text-foreground hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                        <a href="https://rocketshyft.com/" target="_blank">
                            Rocketshyft
                        </a>
                    </span>
                    . ✌️
                </h1>

                <Link
                    href="/about"
                    className="text-xl md:text-2xl text-rose-500 font-bold"
                >
                    More about me
                </Link>
            </section>

            <section className="flex flex-col gap-10 w-full">
                <h3 className="text-2xl md:text-3xl font-semibold">
                    Work Experience
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                        <Image
                            src="/rocketshyft.webp"
                            alt="Rocketshyft"
                            height={200}
                            width={200}
                        />
                        <p className="text-xl md:text-2xl font-semibold">
                            Rocketshyft
                        </p>
                        <p className="text-lg md:text-xl">
                            Front end developer
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Image
                            src="/digipay.png"
                            alt="Digipay"
                            height={200}
                            width={200}
                        />
                        <p className="text-xl md:text-2xl font-semibold">
                            Digipay PH
                        </p>
                        <p className="text-lg md:text-xl">
                            Software Engineer Intern
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-10 w-full">
                <h3 className="text-2xl md:text-3xl font-semibold">
                    Selected Work
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                        <div className="aspect-video relative ">
                            <Image
                                src="/projects/coffee.png"
                                alt="Nisuboard"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-xl md:text-2xl font-semibold">
                            Coffee
                        </p>
                        <p className="text-lg md:text-xl">
                            HTML, CSS, Javascript
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="aspect-video relative ">
                            <Image
                                src="/projects/tesla.png"
                                alt="Tesla"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-xl md:text-2xl font-semibold">
                            Tesla Clone
                        </p>
                        <p className="text-lg md:text-xl">
                            React JS, styled components
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-10 w-full">
                <h3 className="text-2xl md:text-3xl font-semibold">
                    Certifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                        <Image
                            src="/testdome.svg"
                            alt="Rocketshyft"
                            height={150}
                            width={150}
                        />
                        <p className="text-lg md:text-xl">
                            Javascript Certification
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Image
                            src="/testdome.svg"
                            alt="Rocketshyft"
                            height={150}
                            width={150}
                        />
                        <p className="text-lg md:text-xl">
                            Typescript Certification
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Image
                            src="/testdome.svg"
                            alt="Rocketshyft"
                            height={150}
                            width={150}
                        />
                        <p className="text-lg md:text-xl">
                            React Certification
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Image
                            src="/digipay.png"
                            alt="Digipay"
                            height={150}
                            width={150}
                        />
                        <p className="text-lg md:text-xl">
                            Internship Certification
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
