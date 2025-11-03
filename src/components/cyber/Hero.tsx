"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion as useFramerReducedMotion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect, useState } from "react";
import { isWebGLAvailable } from "@/utils/webgl";

const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[380px] md:h-[520px] glass rounded-glass overflow-hidden" aria-hidden>
      <div className="absolute inset-0 animate-pulse bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent" />
    </div>
  ),
});

export default function Hero() {
  const reduced = useReducedMotion();
  const framerReduced = useFramerReducedMotion();
  const [canWebGL, setCanWebGL] = useState(false);

  useEffect(() => {
    setCanWebGL(isWebGLAvailable());
  }, []);

  const show3D = canWebGL && !reduced && !framerReduced;

  return (
    <header className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-70" aria-hidden />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold font-display leading-tight text-neon-violet text-neon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Defend. Detect. Dominate.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-prose"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Elite cybersecurity for modern enterprises. We harden your cloud, hunt advanced threats, and respond with surgical precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-glass px-6 py-3 bg-primary text-primary-foreground shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Request Security Audit
            </a>
            <a
              href="#tech"
              className="inline-flex items-center justify-center rounded-glass px-6 py-3 glass hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Launch Threat Simulation
            </a>
          </motion.div>
        </div>

        <div className="relative">
          {show3D ? (
            <Globe3D />
          ) : (
            <StaticGlobe />
          )}
        </div>
      </div>
    </header>
  );
}

function StaticGlobe() {
  return (
    <div className="relative w-full h-[380px] md:h-[520px] glass rounded-glass overflow-hidden flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] opacity-90" aria-hidden>
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--neon-cyan) / 0.45)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#g)" stroke="hsl(var(--neon-violet))" strokeOpacity="0.6" />
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx="100" cy="100" r={20 + i * 8} fill="none" stroke="hsl(var(--neon-blue))" strokeOpacity="0.2" />
        ))}
      </svg>
    </div>
  );
}
