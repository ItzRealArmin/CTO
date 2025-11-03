"use client";

import { motion } from "framer-motion";
import { useId } from "react";

const services = [
  {
    title: "Penetration Testing",
    description: "Adversarial testing across web, mobile, cloud, and internal networks.",
  },
  {
    title: "Threat Intelligence",
    description: "Actionable intel from deep/dark sources to preempt emerging attacks.",
  },
  {
    title: "Cloud Security",
    description: "Harden AWS, Azure, and GCP with least-privilege, guardrails, and IaC.",
  },
  {
    title: "Incident Response",
    description: "24/7 DFIR with containment, eradication, and post-incident forensics.",
  },
  {
    title: "Red Team Operations",
    description: "Realistic adversary emulations to test detection and response.",
  },
];

export default function Services() {
  const sectionId = useId();
  return (
    <section id="services" aria-labelledby={`${sectionId}-title`} className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 id={`${sectionId}-title`} className="text-3xl md:text-4xl font-display font-semibold">
            Core Services
          </h2>
          <p className="text-muted-foreground mt-2">Interactive cards. Expand with keyboard or hover.</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <li key={s.title} className="group focus-within:shadow-neon">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full text-left glass rounded-glass p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                aria-expanded={false}
              >
                <span className="block text-lg font-semibold">{s.title}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{s.description}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
