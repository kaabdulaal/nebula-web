"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    setErrorMessage("");
    
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      console.error("Supabase Error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to connect to core. Try again.");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <form 
        onSubmit={onSubmit} 
        className="relative z-50 flex w-full items-center justify-between rounded-full border border-white/20 bg-white/5 p-1 pl-6 backdrop-blur-md transition-none shadow-none outline-none ring-0 overflow-hidden"
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          autoComplete="off"
          data-lpignore="true"
          spellCheck="false"
          className="w-full bg-transparent text-sm text-white placeholder-neutral-500 border-none outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none shadow-none appearance-none"
          style={{ outline: 'none', boxShadow: 'none' }}
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={cn(
            "rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-50 outline-none shrink-0 flex items-center gap-2",
            status === "loading" && "opacity-80"
          )}
        >
          {status === "loading" ? (
            <>
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-black/20 border-t-black"></span>
              Encrypting...
            </>
          ) : status === "success" ? "Done" : "Request access"}
        </button>
      </form>
      
      {status === "error" && (
        <p className="absolute -bottom-10 left-6 text-[10px] font-mono uppercase tracking-widest text-red-500/80 animate-pulse">
          {errorMessage || "Connection Failed"}
        </p>
      )}
      
      {status === "success" && (
        <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
          <p className="text-center text-xs font-medium">
            Application submitted. Keep an eye on your email for the invite.
          </p>
        </div>
      )}
    </div>
  );
}
