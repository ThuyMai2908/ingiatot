export type SvgComponentProps<K extends number = 1> = {
  svgProps?: ComponentProps<"svg">;
  pathProps?: PropsArray<ComponentProps<"path">, K>;
  rectProps?: PropsArray<ComponentProps<"rect">, K>;
  circleProps?: PropsArray<ComponentProps<"circle">, K>;
  gProps?: PropsArray<ComponentProps<"g">, K>;
  lineProps?: PropsArray<ComponentProps<"line">, K>;
  rectBorderProps?: PropsArray<ComponentProps<"rect">, K>;
  stopProps?: PropsArray<ComponentProps<"stop">, K>;
};
