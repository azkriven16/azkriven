"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import { MouseEvent, ReactNode } from "react";
import AnimatedCursor from "react-animated-cursor";

interface Props {
  children: ReactNode;
}

export default function Spotlight({ children }: Props) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { theme } = useTheme();

  return (
    <div className="group relative h-full w-full" onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 hidden dark:block"
        style={{
          background: useMotionTemplate` 
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="dark:hidden">
        <AnimatedCursor
          showSystemCursor
          innerStyle={{
            mixBlendMode: "difference",
          }}
          outerStyle={{
            mixBlendMode: "difference",
            border: "1px solid white",
            background: "transparent",
          }}
          innerSize={10}
          outerSize={45}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
      {children}
    </div>
  );
}
