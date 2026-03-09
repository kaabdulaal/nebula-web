"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    ArrowLeft,
    Download,
    ShieldCheck,
    Wrench,
    AlertTriangle,
    Monitor,
} from "lucide-react";
import { SiLinux, SiAndroid } from "react-icons/si";
import Link from "next/link";

const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const CodeTag = ({ children }: { children: string }) => (
    <code className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-purple-300 sm:text-xs">
        {children}
    </code>
);

const Cmd = ({ children }: { children: string }) => (
    <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-neutral-300 sm:text-xs overflow-x-auto">
        <span className="text-purple-400/60 select-none">$ </span>
        {children}
    </div>
);

export default function DocsPage() {
    return (
        <main className="min-h-screen w-full bg-[#030408] selection:bg-purple-500/30">
            { }
            <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#030408]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-3xl items-center px-6 py-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Home
                    </Link>
                    <span className="ml-2 text-neutral-700">/</span>
                    <span className="ml-2 text-xs font-medium text-neutral-400">
                        Documentation
                    </span>
                </div>
            </nav>

            <div className="mx-auto max-w-3xl px-6 py-8 sm:py-12">
                { }
                <FadeIn>
                    <div className="mb-8 sm:mb-10">
                        <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
                            <BookOpen className="h-5 w-5 text-purple-300" />
                        </div>
                        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Documentation
                        </h1>
                        <p className="text-[13px] leading-relaxed text-neutral-400 sm:text-base">
                            Everything from basic installation to building the native C++ core
                            from source.
                        </p>
                    </div>
                </FadeIn>

                { }
                <FadeIn delay={0.06}>
                    <section className="mb-5">
                        <div className="mb-3 flex items-center gap-2.5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 sm:p-2">
                                <Download className="h-3.5 w-3.5 text-purple-300 sm:h-4 sm:w-4" />
                            </div>
                            <span className="font-mono text-[9px] text-purple-400/60 sm:text-[10px]">01</span>
                            <span className="text-sm font-bold text-white sm:text-base">Getting Started</span>
                        </div>

                        <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-3xl">
                            {[
                                {
                                    Icon: SiLinux,
                                    name: "Linux",
                                    text: (
                                        <>
                                            Download the <CodeTag>.AppImage</CodeTag> or <CodeTag>.deb</CodeTag>. Make it executable (<CodeTag>chmod +x</CodeTag>) and run. No dependencies required.
                                        </>
                                    ),
                                },
                                {
                                    Icon: SiAndroid,
                                    name: "Android",
                                    text: (
                                        <>
                                            Download the <CodeTag>.apk</CodeTag> and install it. Ensure you allow &ldquo;Install from Unknown Sources&rdquo;.
                                        </>
                                    ),
                                },
                                {
                                    Icon: Monitor,
                                    name: "Windows",
                                    text: (
                                        <>
                                            Download the <CodeTag>.exe</CodeTag> installer.
                                        </>
                                    ),
                                },
                            ].map((p) => (
                                <div key={p.name} className="flex items-start gap-3">
                                    <p.Icon className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                                    <div>
                                        <h3 className="text-xs font-semibold text-white sm:text-sm">{p.name}</h3>
                                        <p className="mt-0.5 text-xs leading-relaxed text-neutral-400 sm:text-sm">{p.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeIn>

                { }
                <FadeIn delay={0.1}>
                    <section className="mb-5">
                        <div className="mb-3 flex items-center gap-2.5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 sm:p-2">
                                <ShieldCheck className="h-3.5 w-3.5 text-purple-300 sm:h-4 sm:w-4" />
                            </div>
                            <span className="font-mono text-[9px] text-purple-400/60 sm:text-[10px]">02</span>
                            <span className="text-sm font-bold text-white sm:text-base">Security Architecture</span>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-3xl">
                            <p className="mb-3 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                                Nebula is built to be trustless. Here is how we protect your data:
                            </p>
                            <div className="space-y-2.5">
                                {[
                                    { label: "The Core", text: "A native C++ engine bridging Flutter and TDLib for zero-overhead performance." },
                                    { label: "Database", text: "SQLite augmented with SQLCipher for full database encryption." },
                                    { label: "Key Management", text: "AES-GCM encryption keys are generated locally and stored securely using OS-level Keyrings (Linux Secret Service, Android Keystore, Windows Credential Locker)." },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400/60" />
                                        <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
                                            <span className="font-semibold text-white">{item.label}:</span> {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </FadeIn>

                { }
                <FadeIn delay={0.14}>
                    <section className="mb-5">
                        <div className="mb-3 flex items-center gap-2.5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 sm:p-2">
                                <Wrench className="h-3.5 w-3.5 text-purple-300 sm:h-4 sm:w-4" />
                            </div>
                            <span className="font-mono text-[9px] text-purple-400/60 sm:text-[10px]">03</span>
                            <span className="text-sm font-bold text-white sm:text-base">Building from Source</span>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-3xl">
                            <p className="mb-3 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                                Nebula consists of a Dart/Flutter frontend (<CodeTag>nebula_client</CodeTag>) and a C++ backend (<CodeTag>nebula_core</CodeTag>).
                            </p>

                            <h3 className="mb-2 text-xs font-semibold text-white sm:text-sm">Prerequisites</h3>
                            <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                                {["Flutter 3.24+", "CMake 3.20+", "Ninja", "Android NDK"].map((dep) => (
                                    <span
                                        key={dep}
                                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-neutral-400 sm:text-[10px]"
                                    >
                                        {dep}
                                    </span>
                                ))}
                            </div>

                            <h3 className="mb-1 text-xs font-semibold text-white sm:text-sm">
                                <span className="mr-1 font-mono text-[9px] text-purple-400/60 sm:text-[10px]">1.</span>
                                Compiling the C++ Core
                            </h3>
                            <p className="text-xs text-neutral-400 sm:text-sm">
                                Clone the repository and build the <CodeTag>nebula_core</CodeTag> shared library:
                            </p>
                            <Cmd>cmake -B build &amp;&amp; cmake --build build</Cmd>

                            <h3 className="mb-1 mt-4 text-xs font-semibold text-white sm:text-sm">
                                <span className="mr-1 font-mono text-[9px] text-purple-400/60 sm:text-[10px]">2.</span>
                                Building the Client
                            </h3>
                            <p className="text-xs text-neutral-400 sm:text-sm">
                                Once the core library is compiled and placed in the appropriate platform folders:
                            </p>
                            <Cmd>flutter build linux --release</Cmd>
                            <Cmd>flutter build apk --release</Cmd>
                        </div>
                    </section>
                </FadeIn>

                { }
                <FadeIn delay={0.18}>
                    <section>
                        <div className="mb-3 flex items-center gap-2.5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 sm:p-2">
                                <AlertTriangle className="h-3.5 w-3.5 text-purple-300 sm:h-4 sm:w-4" />
                            </div>
                            <span className="font-mono text-[9px] text-purple-400/60 sm:text-[10px]">04</span>
                            <span className="text-sm font-bold text-white sm:text-base">Troubleshooting</span>
                        </div>

                        <div className="space-y-2.5">
                            {[
                                { q: "Linux AppImage not launching", a: "Ensure you have FUSE installed on your system." },
                                { q: "Background Sync on Android", a: "If sync stops, check your battery optimization settings and set Nebula to \"Unrestricted\"." },
                            ].map((faq) => (
                                <div
                                    key={faq.q}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-3xl transition-all hover:border-white/15"
                                >
                                    <h3 className="mb-1 text-xs font-semibold text-white sm:text-sm">{faq.q}</h3>
                                    <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeIn>
            </div>
        </main>
    );
}
