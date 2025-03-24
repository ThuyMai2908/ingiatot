import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

const textVariants = cva("m-0 text-inherit whitespace-pre-wrap", {
  variants: {
    variant: {
      // 80px - 40px
      display:
        "text-background text-[32px] lg:text-[60px] font-medium leading-[120%] font-header",
      // 72px - 38px
      displaySm:
        "text-background text-[32px] lg:text-[48px] font-medium leading-[120%] font-header",
      // 16px
      buttonMenu: "text-primary text-base font-semibold",
      // 40px-30px
      sectionHeading:
        "text-secondary text-[30px] lg:text-[40px] font-medium leading-[120%] font-header",
      // 16px
      bodySm: "text-base font-normal leading-[150%]",
      // 18px
      body: "text-black text-lg font-normal leading-[150%]",
      // 20px
      bodyLg:
        "text-primary text-[20px] font-normal leading-[150%] tracking-[0.8px]",
      // 24px
      titleSm:
        "text-primary text-[16px] font-bold font-header tracking-[2.5px] uppercase",
      // 28px
      title:
        "text-primary text-[28px] font-semibold font-header tracking-[2.5px]",
      // 32px-26px
      titleLg: "text-white text-[26px] lg:text-[32px] font-medium font-header",
    },
    tone: {
      default: "",
      white: "text-white",
      black: "text-black",
      background: "text-background",
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      secondaryForeground: "text-secondary-foreground",
      destructive: "text-destructive",
    },
    fontWeight: {
      inherit: "",
      thin: "font-thin",
      extraLight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extraBold: "font-extrabold",
      black: "font-black",
    },
    textTransform: {
      default: "",
      uppercase: "uppercase",
      capitalize: "capitalize",
      lowercase: "lowercase",
    },
  },
  defaultVariants: {
    variant: "body",
    fontWeight: "inherit",
    tone: "default",
  },
});

type TextElement =
  | "dt"
  | "dd"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "strong"
  | "legend";

export interface TextProps extends VariantProps<typeof textVariants> {
  /** The element type */
  as?: TextElement;
  /** Prevent text from overflowing */
  breakWord?: boolean;
  /** Text to display */
  children?: ReactNode;
  /** HTML id attribute */
  id?: string;
  /** Use a numeric font variant with monospace appearance */
  numeric?: boolean;
  /** Truncate text overflow with ellipsis */
  truncate?: boolean;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  as = "p",
  breakWord,
  children,
  tone,
  variant,
  fontWeight,
  id,
  numeric = false,
  truncate = false,
  textTransform,
  className,
}) => {
  if (!children) return null;
  const Component = as;

  return (
    <Component
      className={cn(
        textVariants({
          variant,
          fontWeight,
          tone,
          textTransform,
        }),
        breakWord && "break-words",
        numeric && "tabular-nums lining-nums",
        truncate && "text-ellipsis overflow-hidden whitespace-nowrap",
        className
      )}
      {...(id && { id })}
    >
      {children}
    </Component>
  );
};

export default Text;
