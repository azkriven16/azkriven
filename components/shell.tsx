import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShellProps {
  className?: string;
  children: ReactNode;
}

export default function Shell({ className, children }: ShellProps) {
  return (
    <main className={cn("max-w-5xl mx-auto px-5 lg:px-0 py-20", className)}>
      {children}
    </main>
  );
}
