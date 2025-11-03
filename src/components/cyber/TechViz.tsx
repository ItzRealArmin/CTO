"use client";

import { motion, useReducedMotion as useFramerReduced } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const config = {
  nodes: [
    { id: "edge", x: 10, y: 50, label: "Edge" },
    { id: "waf", x: 25, y: 28, label: "WAF" },
    { id: "siem", x: 50, y: 50, label: "SIEM" },
    { id: "edr", x: 50, y: 80, label: "EDR" },
    { id: "model", x: 73, y: 38, label: "ML" },
    { id: "soar", x: 85, y: 62, label: "SOAR" },
  ],
  edges: [
    ["edge", "waf"],
    ["waf", "siem"],
    ["siem", "edr"],
    ["siem", "model"],
    ["model", "soar"],
    ["edr", "soar"],
  ],
};

export default function TechViz() {
  const reduced = useReducedMotion();
  const framerReduced = useFramerReduced();
  const isReduced = reduced || framerReduced;

  return (
    <section id="tech" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2">Technology Pipeline</h2>
        <p className="text-muted-foreground mb-6">Scroll-triggered reveals. JSON-configurable nodes/edges.</p>
        <div className="glass rounded-glass p-4">
          <svg viewBox="0 0 100 100" className="w-full h-[320px] md:h-[420px]">
            {config.edges.map(([a, b], i) => {
              const na = config.nodes.find((n) => n.id === a)!;
              const nb = config.nodes.find((n) => n.id === b)!;
              const line = (
                <line
                  key={i}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="hsl(var(--neon-blue))"
                  strokeOpacity="0.35"
                  strokeWidth={0.5}
                />
              );
              return isReduced ? (
                line
              ) : (
                <motion.g key={i} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: i * 0.08 }} viewport={{ once: true }}>
                  {line}
                </motion.g>
              );
            })}
            {config.nodes.map((n, i) => (
              <g key={n.id}>
                {isReduced ? (
                  <circle cx={n.x} cy={n.y} r={2} fill="hsl(var(--neon-violet))" />
                ) : (
                  <motion.circle cx={n.x} cy={n.y} r={2} fill="hsl(var(--neon-violet))" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.05 }} viewport={{ once: true }} />
                )}
                <text x={n.x + 2.8} y={n.y + 1.2} fontSize={3} fill="hsl(var(--foreground))" opacity={0.8}>
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
