"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { PlatformDownloadButton } from "@/components/PlatformDownloadButton";
import { trackExternalLink } from "@/lib/analytics";
import {
  ShieldCheck,
  HardDrive,
  Cpu,
  RefreshCw,
  ChevronDown,
  Github,
  FileText,
  Lock,
  Mail,
  Monitor,
  Maximize2,
  X,
} from "lucide-react";
import {
  SiCplusplus,
  SiDart,
  SiGithub,
  SiLinux,
  SiAndroid,
} from "react-icons/si";

const INNER_RADIUS = 400;
const OUTER_RADIUS = 550;

const FadeIn = ({
  children,
  delay = 0,
  className = "",
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FEATURES = [
  {
    icon: Cpu,
    title: "Native Performance",
    description:
      "Powered by a custom C++ core and TDLib. Nebula offers lightning-fast interaction with the Telegram protocol, optimized for high-speed data handling and low resource consumption.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted by Default",
    description:
      "Your information is protected by industry-standard SQLCipher and AES-256-GCM. Nebula stores all sensitive keys locally within your system's secure storage, ensuring you are the only one with access.",
  },
  {
    icon: RefreshCw,
    title: "Always in Sync",
    description:
      "Advanced foreground synchronization keeps your data updated across Linux, Android, and Windows in real-time, without draining your battery or requiring the app to be open.",
  },
];

const PLATFORM_CARDS = [
  {
    icon: SiLinux,
    name: "Linux",
    formats: ".AppImage / .deb",
    status: "Available",
    image: "/screenshots/linux.png",
  },
  {
    icon: SiAndroid,
    name: "Android",
    formats: ".apk",
    status: "Available",
    image: "/screenshots/android.png",
  },
  {
    icon: Monitor,
    name: "Windows",
    formats: ".exe",
    status: "Available",
    image: "/screenshots/windows.png",
  },
];

export default function NebulaHome() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen w-full bg-[#030408] selection:bg-purple-500/30">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-h-[90vh] max-w-7xl overflow-hidden rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full Screenshot"
                className="h-auto w-full object-contain shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      { }
      { }
      { }
      <section
        id="hero"
        className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-4"
      >
        { }
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b_0%,#030408_60%)] opacity-50" />

        { }
        <div className="absolute inset-0 z-[15] hidden md:flex items-center justify-center pointer-events-none">
          <div className="relative h-full w-full flex items-center justify-center">
            <OrbitingCircles
              className="size-10 border-none bg-transparent"
              duration={25}
              radius={INNER_RADIUS}
              delay={0}
            >
              <div className="flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <SiCplusplus className="h-4 w-4 text-neutral-400" />
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">
                  C++
                </span>
              </div>
            </OrbitingCircles>
            <OrbitingCircles
              className="size-10 border-none bg-transparent"
              duration={25}
              radius={INNER_RADIUS}
              delay={12.5}
            >
              <div className="flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <SiDart className="h-4 w-4 text-neutral-400" />
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">
                  Dart
                </span>
              </div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-12 border-none bg-transparent"
              duration={40}
              radius={OUTER_RADIUS}
              delay={10}
              reverse
            >
              <div className="flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <ShieldCheck className="h-4 w-4 text-neutral-400" />
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">
                  Security
                </span>
              </div>
            </OrbitingCircles>
            <OrbitingCircles
              className="size-12 border-none bg-transparent"
              duration={40}
              radius={OUTER_RADIUS}
              delay={30}
              reverse
            >
              <div className="flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <HardDrive className="h-4 w-4 text-neutral-400" />
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">
                  TDLib
                </span>
              </div>
            </OrbitingCircles>
          </div>
        </div>

        { }
        <div className="z-20 flex flex-col items-center text-center max-w-3xl w-full pt-20 sm:pt-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-500 px-6"
          >
            Open Source · Cross-Platform · Paranoid Security
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 px-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Your Data,
            <br />
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Secured in the Cloud.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl px-8 text-sm leading-relaxed text-neutral-400 sm:text-base lg:text-lg"
          >
            A high-performance storage and data management engine built on TDLib. Securely sync, encrypt, and manage your files and information across devices using Telegram’s infrastructure as a backbone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-full px-4"
          >
            <PlatformDownloadButton />
          </motion.div>
        </div>

        { }
        <button
          onClick={() => {
            const el = document.getElementById('features-section');
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const sectionCenter = window.scrollY + rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            window.scrollTo({ top: sectionCenter - viewportCenter, behavior: 'smooth' });
          }}
          className="absolute bottom-4 sm:bottom-6 z-20 hidden sm:flex flex-col items-center gap-1 text-neutral-600 transition-colors hover:text-neutral-400"
        >
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </section>

      { }
      <section
        id="features-section"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-28"
      >
        <FadeIn className="mb-8 sm:mb-16 text-center">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-purple-400/80">
            Core Advantages
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Powerful Infrastructure, Local Control.
          </h2>
        </FadeIn>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <FadeIn key={f.title} delay={i * 0.12}>
                <div className="group relative flex h-full flex-col rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-3xl transition-all hover:border-white/20 hover:bg-white/[0.05]">
                  { }
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-3 sm:mb-5 inline-flex rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-purple-300" />
                    </div>
                    <h3 className="mb-1 sm:mb-2 text-sm sm:text-lg font-bold text-white">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                      {f.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        { }
        <div className="mt-8 sm:mt-12 hidden sm:flex justify-center">
          <button
            onClick={() => {
              const el = document.getElementById('platform-section');
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const sectionCenter = window.scrollY + rect.top + rect.height / 2;
              const viewportCenter = window.innerHeight / 2;
              window.scrollTo({ top: sectionCenter - viewportCenter, behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1 text-neutral-600 transition-colors hover:text-neutral-400"
          >
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </section>

      { }
      <section id="platform-section" className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:py-28">
        { }
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <FadeIn className="mb-8 sm:mb-16 text-center">
          <p className="mb-2 sm:mb-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-purple-400/80">
            Multi-Platform
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Unified Experience
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-md text-xs sm:text-sm text-neutral-400">
            Nebula provides a consistent, high-speed environment on every device. Whether you are on your desktop or on the go, your data stays accessible and protected.
          </p>
        </FadeIn>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {PLATFORM_CARDS.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.name} delay={i * 0.12}>
                <div className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-3xl transition-all hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-4 transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8 text-neutral-300 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {p.formats}
                  </p>

                  { }
                  <div
                    onClick={() => setSelectedImage(p.image)}
                    className="group/img relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] shadow-2xl cursor-zoom-in"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="h-full w-full"
                    >
                      <img
                        src={p.image}
                        alt={`${p.name} Screenshot`}
                        className="h-full w-full object-cover object-top opacity-60 transition-all duration-500 group-hover/img:opacity-100 group-hover/img:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).parentElement?.classList.add("placeholder-active");
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </motion.div>

                    { }
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 translate-y-4 transition-transform duration-300 group-hover/img:translate-y-0">
                        <div className="rounded-full bg-white/10 p-3 backdrop-blur-md border border-white/20">
                          <Maximize2 className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                          Expand View
                        </span>
                      </div>
                    </div>

                    <div className="hidden absolute inset-0 items-center justify-center [.placeholder-active_&]:flex">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      { }
      <footer className="relative z-10 border-t border-white/10 bg-[#030408]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:gap-4">
          { }
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-sm font-bold text-white tracking-tight">
              Nebula.
            </span>
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-neutral-500">
              © {new Date().getFullYear()} Nebula Project
            </span>
          </div>

          { }
          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-500">
            <a
              href="https://github.com/kaabdulaal/nebula-client"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink("https://github.com/kaabdulaal/nebula-client")}
              className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-white"
            >
              <SiGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href="/docs"
              onClick={() => trackExternalLink("/docs")}
              className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-white"
            >
              <FileText className="h-3.5 w-3.5" />
              Documentation
            </a>
            <a
              href="/privacy"
              onClick={() => trackExternalLink("/privacy")}
              className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-white"
            >
              <Lock className="h-3.5 w-3.5" />
              Privacy Policy
            </a>
            <a
              href="mailto:kaabdulaal@gmail.com"
              onClick={() => trackExternalLink("mailto:kaabdulaal@gmail.com")}
              className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
