"use client";

import { useState, useEffect } from "react";
import { SiLinux, SiAndroid } from "react-icons/si";
import { Download, Monitor } from "lucide-react";
import { trackFileDownload, trackButtonView, trackExternalLink } from "@/lib/analytics";
import { motion } from "framer-motion";

type Platform = "linux" | "windows" | "android" | "unknown";

const PLATFORMS = {
    linux: {
        label: "Linux",
        icon: SiLinux,
        formats: [
            { label: ".AppImage", href: "https://github.com/kaabdulaal/nebula-client/releases/download/v0.1.0-alpha/Nebula-Linux-x86_64.AppImage" },
            { label: ".deb", href: "https://github.com/kaabdulaal/nebula-client/releases/download/v0.1.0-alpha/Nebula-Linux-x86_64.deb" },
        ],
    },
    windows: {
        label: "Windows",
        icon: Monitor,
        formats: [{ label: ".exe", href: "https://github.com/kaabdulaal/nebula-client/releases/download/v0.1.0-alpha/Nebula-Windows-x86_64.exe" }],
    },
    android: {
        label: "Android",
        icon: SiAndroid,
        formats: [{ label: ".apk", href: "https://github.com/kaabdulaal/nebula-client/releases/download/v0.1.0-alpha/Nebula-Android-arm64.apk" }],
    },
} as const;

function detectPlatform(): Platform {
    if (typeof navigator === "undefined") return "linux";
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("android")) return "android";
    if (ua.includes("win")) return "windows";
    if (ua.includes("linux")) return "linux";
    return "linux";
}

type KnownPlatform = keyof typeof PLATFORMS;

export function PlatformDownloadButton() {
    const [platform, setPlatform] = useState<Platform>("linux");

    useEffect(() => {
        setPlatform(detectPlatform());
    }, []);

    const key: KnownPlatform = platform === "unknown" ? "linux" : platform;
    const current = PLATFORMS[key];
    const others = (Object.keys(PLATFORMS) as KnownPlatform[]).filter(
        (k) => k !== key
    );

    return (
        <motion.div
            onViewportEnter={() => trackButtonView("download_cluster")}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 sm:gap-6"
        >
            { }
            <a
                href={current.formats[0].href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFileDownload(current.label, current.formats[0].label)}
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-base font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-y-0.5" />
                Download for {current.label}
            </a>

            { }
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {others.map((key) => {
                    const p = PLATFORMS[key];
                    const Icon = p.icon;
                    return (
                        <a
                            key={key}
                            href={p.formats[0].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackFileDownload(p.label, p.formats[0].label)}
                            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium text-neutral-400 backdrop-blur-md transition-all hover:border-white/20 hover:text-white hover:bg-white/10"
                        >
                            <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                            {p.label}
                            <span className="text-neutral-600">
                                {p.formats.map((f: { label: string; href: string }) => f.label).join(" / ")}
                            </span>
                        </a>
                    );
                })}
                { }
                {current.formats.length > 1 && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        {current.formats.map((f) => (
                            <a
                                key={f.label}
                                href={f.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackFileDownload(current.label, f.label)}
                                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-neutral-500 backdrop-blur-md transition-all hover:border-white/20 hover:text-white"
                            >
                                {f.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
