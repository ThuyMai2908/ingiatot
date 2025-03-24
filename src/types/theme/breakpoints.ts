export const breakpointsAliases = [
  "base",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

export type BreakpointsAlias = (typeof breakpointsAliases)[number];

export type ResponsiveValue<T> = T | { [Breakpoint in BreakpointsAlias]?: T };

export type ResponsiveProp<T> = T | ResponsivePropConfig<T>;

export type ResponsivePropConfig<T = number> = {
  [Breakpoint in BreakpointsAlias]?: T;
};
