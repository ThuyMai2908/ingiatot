import { getResponsiveProps } from "@/lib/breakpoints";
import { cn } from "@/lib/utils";
import { ResponsiveProp } from "@/types/theme/breakpoints";
import React from "react";

export type InlineGridAlignItems = "start" | "end" | "center";

interface InlineGridProps extends React.AriaAttributes {
  children?: React.ReactNode;
  columns?: ResponsiveProp<number>;
  gap?: ResponsiveProp<number>;
  alignItems?: InlineGridAlignItems;
  className?: string;
}

const InlineGrid: React.FC<InlineGridProps> = ({
  children,
  columns,
  gap,
  alignItems,
  className,
  ...restProps
}) => {
  return (
    <div
      className={cn(
        "grid",
        getResponsiveProps("grid-cols", columns),
        getResponsiveProps("gap", gap),
        alignItems && `items-${alignItems}`,
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default InlineGrid;
