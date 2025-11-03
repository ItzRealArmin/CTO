"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Case = {
  id: string;
  title: string;
  tag: "Red Team" | "DFIR" | "Zero-Day";
  summary: string;
  details: string;
};

const cases: Case[] = [
  { id: "1", title: "Global Bank: APT Emulation", tag: "Red Team", summary: "Simulated nation-state intrusion across hybrid cloud.", details: "We executed a full-scope red team against cloud and on-prem assets, achieving objectives covertly while validating detections." },
  { id: "2", title: "Retail: Ransomware Containment", tag: "DFIR", summary: "Rapid isolation and restore under 8 hours.", details: "Our DFIR team contained lateral movement, restored from immutable backups, and improved EDR coverage and playbooks." },
  { id: "3", title: "SaaS: Zero-Day Discovery", tag: "Zero-Day", summary: "Unauth chain in multi-tenant API.", details: "We found and responsibly disclosed a critical auth bypass impacting millions of users; coordinated patch and advisory." },
];

const tags = ["All", "Red Team", "DFIR", "Zero-Day"] as const;

export default function CaseStudies() {
  const [filter, setFilter] = useState<(typeof tags)[number]>("All");
  const [active, setActive] = useState<Case | null>(null);

  const filtered = useMemo(() => (filter === "All" ? cases : cases.filter((c) => c.tag === filter)), [filter]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Case Studies & Intel</h2>
            <p className="text-muted-foreground">Hover to reveal, click for details</p>
          </div>
          <div role="tablist" aria-label="Case filters" className="flex gap-2">
            {tags.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={filter === t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-glass glass text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${filter === t ? "shadow-neon" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setActive(c)}
                className="group block w-full text-left glass rounded-glass p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                aria-haspopup="dialog"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{c.title}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary-foreground/90">{c.tag}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">{c.summary}</p>
              </button>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {active && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-modal role="dialog" aria-label={active.title}>
              <div className="absolute inset-0 bg-black/50" onClick={() => setActive(null)} />
              <motion.div className="relative glass rounded-glass p-6 max-w-lg w-full" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{active.details}</p>
                <div className="mt-4 flex justify-end">
                  <button onClick={() => setActive(null)} className="px-4 py-2 rounded-glass glass focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
