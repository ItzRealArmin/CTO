"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const isDark = (theme === "system" ? systemTheme : theme) === "dark";

  const handleToggle = () => {
    // add a temporary class to choreograph transitions
    if (!reduceMotion) {
      const html = document.documentElement;
      html.classList.add("theme-transition");
      window.setTimeout(() => html.classList.remove("theme-transition"), 300);
    }
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className={cn(
        "glass inline-flex items-center gap-2 rounded-glass px-3 py-2 text-sm font-medium shadow-neon-sm",
        "hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-primary/50",
        className
      )}
    >
      <span className="text-xl leading-none drop-shadow-neon">
        {isDark ? "🌙" : "🌞"}
      </span>
      <span className="hidden sm:inline text-muted-foreground">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
