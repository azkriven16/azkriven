"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const { theme, setTheme } = useTheme();

    const handleThemeSwitch = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    if (!mounted) return null;

    return (
        <div
            onClick={handleThemeSwitch}
            className="cursor-pointer flex items-center gap-2 p-2"
        >
            <Sun
                size={20}
                className="hidden dark:inline text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
            />
            <Moon
                size={20}
                className="inline dark:hidden text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
            />
            <span className="sr-only">Toggle theme</span>
            <span className="text-sm">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
        </div>
    );
}
