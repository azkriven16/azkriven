import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const certifications = [
    {
        title: "JavaScript",
        description: "JavaScript Certification",
        link: "https://www.testdome.com/certificates/530156ebb39f43c5a407bb157b414413",
        image: "/logo/testdome.svg",
    },
    {
        title: "TypeScript",
        description: "TypeScript Certification",
        link: "https://www.testdome.com/certificates/b42958b8c828498782f72c304e0f7d24",
        image: "/logo/testdome.svg",
    },
    {
        title: "React",
        description: "React Certification",
        link: "https://www.testdome.com/certificates/da2507e9432941068913931a9ce1dc47",
        image: "/logo/testdome.svg",
    },
    {
        title: "Internship",
        description: "Internship Certification",
        link: "https://azkriven.vercel.app/cert.png",
        image: "/logo/digipay-logo.png",
    },
];
export const Certificates = () => {
    return (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {certifications.map((cert, index) => (
                <Link href={cert.link} target="_blank" key={index}>
                    <motion.div
                        className="group relative rounded-3xl overflow-hidden bg-secondary/5 border border-secondary/10 transition-colors hover:bg-secondary/50 hover:border-secondary"
                        whileHover="hover"
                    >
                        <div className="h-20 w-20 relative mx-8">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    {cert.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {cert.description}
                                </p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full group-hover:bg-secondary"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    );
};
