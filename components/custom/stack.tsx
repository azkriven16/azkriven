import {
    IconBrandFirebase,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandTypescript,
} from "@tabler/icons-react";

export const TechStack = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 font-semibold text-lg">
                Tech Stack
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 place-items-center">
                <div className="flex flex-col items-center">
                    <IconBrandJavascript />
                    <p className="text-center text-sm">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <IconBrandTypescript />
                    <p className="text-center text-sm">TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <IconBrandReact />
                    <p className="text-center text-sm">React</p>
                </div>
                <div className="flex flex-col items-center">
                    <IconBrandNextjs />
                    <p className="text-center text-sm">Next.js</p>
                </div>
                <div className="flex flex-col items-center">
                    <IconBrandFirebase />
                    <p className="text-center text-sm">Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                    <IconBrandPrisma />
                    <p className="text-center text-sm">Prisma</p>
                </div>
                <div className="flex flex-col items-center">
                    <IconBrandMongodb />
                    <p className="text-center text-sm">MongoDB</p>
                </div>
            </div>
        </div>
    );
};
