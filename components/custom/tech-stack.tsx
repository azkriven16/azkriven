import {
    IconBrandFirebase,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandTypescript,
} from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";

export const TechStack = () => {
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    My Tech Stack
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                    These are the technologies I work with most frequently.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex items-center p-4 shadow-md border rounded-lg">
                        <IconBrandTypescript className="w-12 h-12 mr-4" />
                        <div>
                            <p className="font-semibold">TypeScript</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Typed JavaScript superset
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 shadow-md border rounded-lg">
                        <IconBrandReact className="w-12 h-12 mr-4" />
                        <div>
                            <p className="font-semibold">React</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                UI building library
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 shadow-md border rounded-lg">
                        <IconBrandNextjs className="w-12 h-12 mr-4" />
                        <div>
                            <p className="font-semibold">Next.js</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                React production framework
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 shadow-md border rounded-lg">
                        <IconBrandPrisma className="w-12 h-12 mr-4" />
                        <div>
                            <p className="font-semibold">Prisma</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Modern database toolkit
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 shadow-md border rounded-lg">
                        <IconBrandMongodb className="w-12 h-12 mr-4" />
                        <div>
                            <p className="font-semibold">MongoDB</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                NoSQL database solution
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 shadow-md border rounded-lg">
                        <IconBrandTailwind className="w-12 h-12 mr-4" />
                        <div>
                            <p className="font-semibold">Tailwind CSS</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Utility-first CSS framework
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
