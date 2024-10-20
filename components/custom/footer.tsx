import { IconBrandNextjs, IconBrandTailwind } from "@tabler/icons-react";

export const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row items-center gap-5 justify-between p-2 md:p-10 mt-20">
                <p className="text-xs">
                    &copy; {new Date().getFullYear()} Euger Portfolio. All
                    rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                    <p className="text-xs">Built with</p>
                    <IconBrandNextjs />
                    <p className="text-xs">Next.js</p>
                    <IconBrandTailwind size="24" />
                    <p className="text-xs">Tailwindcss</p>
                </div>
            </div>
        </footer>
    );
};
