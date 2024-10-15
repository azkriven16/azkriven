"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const handleThemeSwitch = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <Button
            onClick={handleThemeSwitch}
            size="icon"
            variant="outline"
            className="min-w-[35px]"
        >
            <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 h-8 w-8 md:h-4 md:w-4" />
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 h-8 w-8 md:h-4 md:w-4" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
