"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-black/5",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <Beam x="10%" delay={0} duration={8} />
          <Beam x="30%" delay={2} duration={12} />
          <Beam x="50%" delay={5} duration={15} />
          <Beam x="70%" delay={1} duration={10} />
          <Beam x="90%" delay={3} duration={14} />
        </svg>
      </div>
    </div>
  );
};

const Beam = ({
  x,
  delay,
  duration,
}: {
  x: string;
  delay: number;
  duration: number;
}) => {
  return (
    <rect
      x={x}
      y="-100"
      width="1.5"
      height="150"
      fill="url(#beam-grad)"
      className="animate-beam"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};
