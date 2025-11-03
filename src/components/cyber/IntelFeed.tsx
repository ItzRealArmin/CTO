"use client";

import { motion } from "framer-motion";

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Advisory ${i + 1}`,
  summary: "Indicators of compromise and mitigations for latest campaign.",
}));

export default function IntelFeed() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Intelligence Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.article
              key={it.id}
              className="glass rounded-glass p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.summary}</p>
              <div className="mt-3 text-xs text-muted-foreground">Mocked data</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
