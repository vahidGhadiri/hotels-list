import type { MouseEventHandler } from "react";
import { forwardRef } from "react";

import * as stroked from "../icons/stroked";
import * as filled from "../icons/filled";

import { composeClassNames } from "../../utils";
import styles from "./styles.module.scss";

export type IconNames = keyof typeof filled | keyof typeof stroked;
const DEFAULT_SIZE = 24;

export type IconColor =
  | "secondary"
  | "primary"
  | "success"
  | "error"
  | "alert"
  | "white"
  | "gray"
  | "none";

export interface IconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  mode?: "filled" | "stroked";
  className?: string;
  color?: IconColor;
  name: IconNames;
  size?: number;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = DEFAULT_SIZE,
      mode = "stroked",
      color = "none",
      className,
      onClick,
      name,
    },
    ref
  ) => {
    const colorClassNames: { [key in IconColor]: string } = {
      secondary: "text-secondary",
      success: "text-success",
      primary: "text-primary",
      error: "text-error",
      alert: "text-alert",
      white: "text-white",
      gray: "text-neutral",
      none: "",
    };
    const SelectedIcon = mode === "stroked" ? stroked[name] : filled[name];
    return (
      <SelectedIcon
        className={composeClassNames([
          styles.colored,
          colorClassNames[color],
          className,
        ])}
        onClick={onClick}
        height={size}
        width={size}
        ref={ref}
      />
    );
  }
);

export default Icon;
