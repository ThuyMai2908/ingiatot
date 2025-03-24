import { cn } from "@/lib/utils";
import React from "react";

interface LineProps {
  className?: string;
}

const LineHorizontal = ({ className }: LineProps) => {
  return (
    <div
      data-orientation="horizontal"
      role="none"
      className={cn(
        `shrink-0 h-[1px] w-full bg-black mt-0 mb-8 lg:mt-20 `,
        className
      )}
    ></div>
  );
};

export default LineHorizontal;
