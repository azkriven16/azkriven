import { IconBrandNextjs, IconBrandTailwind } from "@tabler/icons-react";

export const Footer = () => {
    return (
        <footer className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Euger Portfolio. All
                        rights reserved.
                    </p>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm text-muted-foreground">Built with</p>
                        <div className="flex items-center space-x-2">
                            <IconBrandNextjs className="w-5 h-5" />
                            <span className="text-sm">Next.js</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <IconBrandTailwind className="w-5 h-5" />
                            <span className="text-sm">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
