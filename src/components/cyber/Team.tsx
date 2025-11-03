"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Ava Chen", role: "Director, Red Team" },
  { name: "Marcus Lee", role: "DFIR Lead" },
  { name: "Sofia Patel", role: "Cloud Security Architect" },
  { name: "Liam Novak", role: "Threat Intelligence" },
];

export default function Team() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Team</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <li key={m.name}>
              <motion.div
                whileHover={{ rotateX: 3, rotateY: -3 }}
                whileFocus={{ rotateX: 3, rotateY: -3 }}
                className="glass rounded-glass p-5 focus-within:shadow-neon"
              >
                <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-neon-cyan/15 via-transparent to-neon-violet/15 relative overflow-hidden" aria-hidden>
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(124,58,237,0.35) 0, rgba(124,58,237,0.35) 2px, transparent 2px, transparent 6px)" }} />
                  <div className="absolute inset-2 rounded-md border border-primary/30" />
                </div>
                <div className="mt-4">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
                <button className="mt-4 px-3 py-1.5 rounded-glass glass text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                  View Profile
                </button>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
