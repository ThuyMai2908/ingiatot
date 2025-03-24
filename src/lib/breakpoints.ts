import isObject from "@/lib/utils";
import {
  BreakpointsAlias,
  breakpointsAliases,
  ResponsiveProp,
  ResponsivePropConfig,
} from "@/types/theme/breakpoints";

const isBreakpoint = (value: any): value is BreakpointsAlias => {
  return breakpointsAliases.includes(value);
};

const isResponsiveConfig = (value: any): Boolean => {
  const isObj = isObject(value);
  if (!isObj) return false;
  return Object.keys(value).every((breakpoint) => {
    return isBreakpoint(breakpoint) && Boolean(value?.[breakpoint]);
  });
};

const compileClassName = (
  prefix: string,
  value: any,
  breakpoint?: BreakpointsAlias
) => {
  let className = `${prefix}-${value}`;
  if (breakpoint && breakpoint != "base")
    className = `${breakpoint}:` + className;
  return className;
};

export function getResponsiveProps<T>(
  prefix: string,
  responsiveProp?: ResponsiveProp<T>
) {
  if (!responsiveProp) return "";
  const validConfig = isResponsiveConfig(responsiveProp);
  if (!validConfig) return `${prefix}-${responsiveProp}`;

  let classNames: string[] = [];

  Object.entries(responsiveProp as ResponsivePropConfig<T>).forEach(
    ([breakpoint, value]) => {
      const className = compileClassName(
        prefix,
        value,
        breakpoint as BreakpointsAlias
      );
      classNames.push(className);
    }
  );
  return classNames.join(" ");
}
