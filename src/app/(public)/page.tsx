"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { WaitlistForm } from "@/components/waitlist-form";
import { ShieldCheck, HardDrive } from "lucide-react";
import { SiCplusplus, SiDart, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";

const INNER_RADIUS = 340; 
const OUTER_RADIUS = 500; 

export default function NebulaWaitlist() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#030408] selection:bg-purple-500/30">
      
      {}
      <div 
        className="absolute inset-0 z-0 opacity-80 sm:opacity-100 pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle, transparent 30%, black 70%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 30%, black 70%)",
        }}
      >
        <BackgroundBeams />
      </div>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="rgba(168, 85, 247, 0.3)" />

      {}
      <div className="absolute inset-0 z-[15] hidden md:flex items-center justify-center pointer-events-none">
         <div className="relative h-full w-full flex items-center justify-center">
            
            {}
            <OrbitingCircles 
              className="size-10 border-none bg-transparent" 
              duration={25} 
              radius={INNER_RADIUS}
              delay={0}
            >
              <div className="flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <SiCplusplus className="h-4 w-4 text-neutral-400" />
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">C++</span>
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
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">Dart</span>
              </div>
            </OrbitingCircles>

            {}
            <OrbitingCircles 
              className="size-12 border-none bg-transparent" 
              duration={40} 
              radius={OUTER_RADIUS}
              delay={10}
              reverse
            >
              <div className="flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <ShieldCheck className="h-4 w-4 text-neutral-400" />
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">Security</span>
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
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase whitespace-nowrap">Unlimited</span>
              </div>
            </OrbitingCircles>

         </div>
      </div>

      {}
      <div className="relative z-20 flex w-full flex-col items-center justify-center px-4">
        <CardContainer className="inter-var">
          <CardBody className="group/card relative flex w-full max-w-[440px] flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl backdrop-blur-3xl sm:p-12">
            
            <CardItem translateZ="50" className="w-full text-center">
              <h1 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-6xl">
                Nebula.
              </h1>
            </CardItem>
            
            <CardItem translateZ="60" className="w-full text-center">
              <p className="mx-auto mb-8 max-w-[320px] text-sm leading-relaxed text-neutral-400">
                Secure standalone vault leveraging Telegram's secure infrastructure. Private encrypted file storage. Unlimited storage. C++ performance.
              </p>
            </CardItem>

            <CardItem translateZ="100" className="w-full">
              <WaitlistForm />
            </CardItem>

          </CardBody>
        </CardContainer>
      </div>

      {}
      <div className="absolute bottom-10 z-30 flex flex-col items-center gap-4 text-neutral-500 pointer-events-auto">
        <div className="flex gap-8">
          <a href="https://www.instagram.com/nebula.vault" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 cursor-pointer">
            <SiInstagram size={20} />
          </a>
          <a href="https://github.com/kaabdulaal/nebula-client" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 cursor-pointer">
            <SiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kaabdulaal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 cursor-pointer">
            <SiLinkedin size={20} />
          </a>
        </div>
        <p className="text-[10px] font-light tracking-[0.2em] uppercase">Built by Nebula Vault</p>
      </div>

    </main>
  );
}
