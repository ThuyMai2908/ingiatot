import { getResponsiveProps } from "@/lib/breakpoints";
import { cn } from "@/lib/utils";
import { ResponsiveProp } from "@/types/theme/breakpoints";
import { HTMLProps } from "react";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  background?: string;
  className?: string;
  paddingY?: ResponsiveProp<number>;
  gap?: ResponsiveProp<number>;
  container?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  background,
  className,
  gap,
  container = false,
  ...restProps
}) => {
  return (
    <section className={cn(background && `bg-${background}`)}>
      <div
        className={cn(
          "flex flex-col w-full pt-16 pb-0 py-16 lg:py-28",
          container && "container",
          getResponsiveProps("gap", gap),
          className
        )}
        {...restProps}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
