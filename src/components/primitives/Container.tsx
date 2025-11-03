import * as React from "react";
import { cn } from "@/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  fluid?: boolean;
}

export default function Container({
  as: Tag = "div",
  className,
  fluid = false,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        fluid ? "w-full" : "container",
        "mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
