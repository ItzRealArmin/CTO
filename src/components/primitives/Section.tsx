import * as React from "react";
import { cn } from "@/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  bleed?: boolean;
}

export default function Section({
  as: Tag = "section",
  className,
  bleed = false,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "py-12 sm:py-16",
        bleed ? "px-0" : "",
        className
      )}
      {...props}
    />
  );
}
