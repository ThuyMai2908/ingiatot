import { getResponsiveProps } from "@/lib/breakpoints";
import { cn } from "@/lib/utils";
import { ResponsiveProp } from "@/types/theme/breakpoints";

type Align = "start" | "center" | "end" | "around" | "between" | "evenly";

type BlockAlign = "start" | "center" | "end" | "baseline" | "stretch";

type Element = "div" | "span" | "li" | "ol" | "ul";

interface InlineStackProps extends React.AriaAttributes {
  children?: React.ReactNode;
  /** HTML Element type
   * @default 'div'
   */
  as?: Element;
  align?: Align;
  blockAlign?: BlockAlign;
  gap?: ResponsiveProp<number>;
  id?: string;
  /** Wrap stack elements to additional rows as needed on small screens
   * @default true
   */
  wrap?: boolean; // Wrap content on small screens
  fullWidth?: boolean;
  className?: string;
}

const InlineStack: React.FC<InlineStackProps> = ({
  children,
  as: Element = "div",
  align,
  blockAlign,
  gap,
  id,
  wrap,
  fullWidth = false,
  className,
}) => (
  <Element
    id={id}
    className={cn(
      "flex",
      align && `justify-${align}`,
      blockAlign && `items-${blockAlign}`,
      getResponsiveProps("gap", gap),
      wrap === true && "flex-wrap",
      wrap === false && "flex-nowrap",
      fullWidth && "w-full",
      className
    )}
  >
    {children}
  </Element>
);

export default InlineStack;
