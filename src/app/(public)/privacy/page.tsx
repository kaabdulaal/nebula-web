"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Server, Code, Mail, ArrowLeft } from "lucide-react";
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

const SECTIONS = [
    {
        icon: Eye,
        number: "01",
        title: "Zero Data Collection",
        content:
            "We do not own servers, we do not collect telemetry, and we do not track your usage. Nebula does not transmit any personal data, analytics, or crash reports to us or any third-party marketing services.",
    },
    {
        icon: Lock,
        number: "02",
        title: "Local-Only Encryption",
        content:
            "All sensitive data, including your cryptographic keys, session tokens, and cached files, are stored exclusively on your device. We use SQLCipher and AES-256-GCM encryption. The decryption keys are protected by your operating system's native secure enclave (e.g., Keychain, Keystore) and never leave your hardware.",
    },
    {
        icon: Server,
        number: "03",
        title: "Telegram Infrastructure",
        items: [
            "When you use Nebula, your encrypted data is relayed through Telegram's cloud infrastructure.",
            "We do not have access to your Telegram account, messages, or files.",
        ],
        footer: (
            <>
                For information on how Telegram handles data on their servers, please
                refer to the{" "}
                <a
                    href="https://telegram.org/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
                >
                    Telegram Privacy Policy
                </a>
                .
            </>
        ),
    },
    {
        icon: Code,
        number: "04",
        title: "Open Source Verification",
        content:
            "Nebula is completely open-source. You do not have to take our word for it — our entire codebase, including the C++ core and Flutter UI, is available on GitHub for independent auditing.",
    },
    {
        icon: Mail,
        number: "05",
        title: "Contact",
        footer: (
            <>
                If you have any questions about our security practices or this policy,
                please open an issue on our{" "}
                <a
                    href="https://github.com/kaabdulaal/nebula-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
                >
                    GitHub Repository
                </a>{" "}
                or email{" "}
                <a
                    href="mailto:kaabdulaal@gmail.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
                >
                    kaabdulaal@gmail.com
                </a>
                .
            </>
        ),
    },
];

export default function PrivacyPage() {
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
                        Privacy Policy
                    </span>
                </div>
            </nav>

            <div className="mx-auto max-w-3xl px-6 py-8 sm:py-12">
                { }
                <FadeIn>
                    <div className="mb-8 sm:mb-10">
                        <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
                            <ShieldCheck className="h-5 w-5 text-purple-300" />
                        </div>
                        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Privacy Policy
                        </h1>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 sm:text-[10px]">
                            Last Updated: March 9, 2026
                        </p>
                        <p className="mt-3 text-[13px] leading-relaxed text-neutral-400 sm:text-base">
                            At Nebula, we believe your data is yours alone. We built this
                            project with a &ldquo;local-first, paranoid-level security&rdquo; mindset.
                        </p>
                    </div>
                </FadeIn>

                { }
                <div className="space-y-4 sm:space-y-5">
                    {SECTIONS.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <FadeIn key={s.number} delay={i * 0.06}>
                                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-3xl transition-all hover:border-white/15">
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="mt-0.5 shrink-0 rounded-lg border border-white/10 bg-white/5 p-1.5 sm:p-2 h-fit">
                                            <Icon className="h-3.5 w-3.5 text-purple-300 sm:h-4 sm:w-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="mb-1.5 flex items-baseline gap-2">
                                                <span className="font-mono text-[9px] text-purple-400/60 sm:text-[10px]">
                                                    {s.number}
                                                </span>
                                                <h2 className="text-sm font-bold text-white sm:text-base">
                                                    {s.title}
                                                </h2>
                                            </div>
                                            {s.content && (
                                                <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
                                                    {s.content}
                                                </p>
                                            )}
                                            {s.items && (
                                                <ul className="mb-2 space-y-1.5">
                                                    {s.items.map((item, j) => (
                                                        <li
                                                            key={j}
                                                            className="flex items-start gap-2 text-xs leading-relaxed text-neutral-400 sm:text-sm"
                                                        >
                                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400/60" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {s.footer && (
                                                <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
                                                    {s.footer}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
