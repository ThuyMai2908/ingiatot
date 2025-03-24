import { cn } from "@/lib/utils";
import assert from "assert";
import React from "react";

interface BackgroundOverlayProps {
  to?: "b" | "t" | "r" | "l" | "tr" | "br" | "tl" | "bl";
  gradient?: [string, string, string];
  /** Percentage values for gradient stops ['10%', '30%', '90%'] */
  stops?: [string?, string?, string?];
  background?: string;
  /** Percentage values for opacity (e.g 0.1 for 10%) */
  opacity?:
    | "opacity-5"
    | "opacity-10"
    | "opacity-15"
    | "opacity-20"
    | "opacity-25"
    | "opacity-30"
    | "opacity-35"
    | "opacity-40"
    | "opacity-45"
    | "opacity-50"
    | "opacity-55"
    | "opacity-60"
    | "opacity-65"
    | "opacity-70"
    | "opacity-75"
    | "opacity-80"
    | "opacity-85"
    | "opacity-90"
    | "opacity-95"
    | "opacity-100";
  className?: string;
}

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
  to,
  gradient,
  stops,
  background,
  opacity,
  className,
}) => {
  assert(
    stops ? Boolean(gradient) : true,
    "'stops' property must be defined only if 'gradient' is defined"
  );
  assert(
    to || gradient ? gradient && to : true,
    "'to' property must be defined only if 'gradient' is defined"
  );
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className,
        to && `bg-gradient-to-${to}`,
        gradient && `from-${gradient[0]} via-${gradient[1]} to-${gradient[2]}`,
        background && background,
        stops && stops[0] && `from-[${stops[0]}]`,
        stops && stops[1] && `from-[${stops[1]}]`,
        stops && stops[2] && `from-[${stops[2]}]`,
        opacity && opacity
      )}
    />
  );
};

export default BackgroundOverlay;
