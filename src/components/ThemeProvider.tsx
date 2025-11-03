"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = true,
  disableTransitionOnChange = true,
}: {
  children: React.ReactNode;
  attribute?: Parameters<typeof NextThemesProvider>[0]["attribute"];
  defaultTheme?: Parameters<typeof NextThemesProvider>[0]["defaultTheme"];
  enableSystem?: Parameters<typeof NextThemesProvider>[0]["enableSystem"];
  disableTransitionOnChange?: Parameters<typeof NextThemesProvider>[0]["disableTransitionOnChange"];
}) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
