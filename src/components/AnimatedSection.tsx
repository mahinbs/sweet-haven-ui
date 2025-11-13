import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "slide-up" | "slide-left" | "slide-right" | "zoom" | "rotate" | "fade";
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ 
  children, 
  animation = "slide-up", 
  delay = 0,
  className 
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClass = {
    "slide-up": "scroll-slide-up",
    "slide-left": "scroll-slide-left",
    "slide-right": "scroll-slide-right",
    "zoom": "scroll-zoom",
    "rotate": "scroll-rotate",
    "fade": "scroll-animate",
  }[animation];

  return (
    <div
      ref={elementRef}
      className={cn(animationClass, isVisible && "visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

