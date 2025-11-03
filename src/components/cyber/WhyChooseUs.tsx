"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion as useFramerReduced } from "framer-motion";

const stats = [
  { label: "Uptime", value: 99.99, suffix: "%" },
  { label: "Critical Breaches", value: 0, suffix: "" },
  { label: "Enterprises Secured", value: 300, suffix: "+" },
];

export default function WhyChooseUs() {
  const prefersReduced = useFramerReduced();
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2">Why Choose Us</h2>
        <p className="text-muted-foreground mb-8">Trusted by global leaders. Proven outcomes.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" aria-live="polite">
          {stats.map((s, idx) => (
            <div key={s.label} className="glass rounded-glass p-6">
              <AnimatedCounter
                target={s.value}
                suffix={s.suffix}
                duration={1.6}
                delay={idx * 0.2}
                reduced={prefersReduced}
              />
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              <motion.div
                className="mt-3 h-1 rounded-full bg-gradient-to-r from-neon-cyan/60 via-neon-violet/60 to-neon-blue/60"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.2 + idx * 0.15 }}
                viewport={{ once: true }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, duration = 1.5, suffix = "", delay = 0, reduced }: { target: number; duration?: number; suffix?: string; delay?: number; reduced?: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (reduced) {
      setDisplay(`${target}${suffix}`);
      return;
    }
    let raf: number;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start - delay * 1000) / (duration * 1000));
      if (t <= 0) {
        raf = requestAnimationFrame(step);
        return;
      }
      const val = target === 0 ? 0 : Math.round((target as number) * easeOutCubic(t));
      setDisplay(`${val}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, suffix, delay, reduced]);

  return <div className="text-4xl font-bold" aria-live="polite">{display}</div>;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
