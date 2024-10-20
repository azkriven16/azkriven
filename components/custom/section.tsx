import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShellProps {
    className?: string;
    children: ReactNode;
}

export default function Section({ className, children }: ShellProps) {
    return (
        <section className={cn("max-w-4xl mx-auto space-y-5 my-10", className)}>
            {children}
        </section>
    );
}
