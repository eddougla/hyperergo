import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
};

const Container = ({ children, className, size = "lg" }: ContainerProps) => {
  const sizeClasses = {
    xs: "max-w-xs",
    sm: "max-w-md",
    md: "max-w-3xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
