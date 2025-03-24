import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const outlineButtonVariants = cva(
  cn(
    "group inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shrink-0",
    "border-2 bg-transparent relative z-0 overflow-hidden transition-all duration-500",
    // BEFORE pseudo-element
    "before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2] before:rounded-full before:bg-gradient-to-r before:from-white before:to-white before:transition-transform before:duration-1000 before:ease-out",
    // Hover state
    "hover:before:translate-x-0 hover:before:translate-y-0"
  ),
  {
    variants: {
      tone: {
        default:
          "border border-input text-white capitalize hover:bg-accent hover:text-accent-foreground from-white",
      },
      size: {
        default: "h-12 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      tone: "default",
      size: "default",
    },
  }
);

export interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof outlineButtonVariants> {
  asChild?: boolean;
}

const OutlineButton = React.forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ className, size, tone, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(outlineButtonVariants({ size, className, tone }))}
        ref={ref}
        {...props}
      />
    );
  }
);
OutlineButton.displayName = "OutlineButton";

export { OutlineButton, outlineButtonVariants };
