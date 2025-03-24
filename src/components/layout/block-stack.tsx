import { getResponsiveProps } from "@/lib/breakpoints";
import { cn } from "@/lib/utils";
import { ResponsiveProp } from "@/types/theme/breakpoints";
import React from "react";

type Align = "start" | "center" | "end" | "around" | "between" | "evenly";

type InlineAlign =
  | "start"
  | "center"
  | "end"
  | "baseline"
  | "stretch"
  | "between"
  | "evenly";

type Element = "div" | "span" | "ul" | "ol" | "li" | "fieldset";

interface BlockStackProps extends React.AriaAttributes {
  children?: React.ReactNode;
  /** HTML Element type
   * @default 'div'
   */
  as?: Element;
  align?: Align;
  inlineAlign?: InlineAlign;
  gap?: ResponsiveProp<number>;
  id?: string;
  /** Reverse the render order of child items
   * @default false
   */
  reverseOrder?: boolean;
  fullHeight?: boolean;
  className?: string;
}

const BlockStack: React.FC<BlockStackProps> = ({
  as: Element = "div",
  align,
  inlineAlign,
  gap = undefined,
  id,
  children,
  reverseOrder = false,
  fullHeight = false,
  className,
  ...restProps
}) => (
  <Element
    id={id}
    className={cn(
      "flex flex-col",
      align && `justify-${align}`,
      inlineAlign && `items-${inlineAlign}`,
      getResponsiveProps("gap", gap),
      reverseOrder && "flex-col-reverse",
      fullHeight && "h-full",
      className
    )}
    {...restProps}
  >
    {children}
  </Element>
);

export default BlockStack;
