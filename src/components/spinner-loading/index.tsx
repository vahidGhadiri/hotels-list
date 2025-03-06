import { memo } from "react";
import { composeClassNames } from "../../utils";
import type { FC } from "react";

type Size = "large" | "medium" | "small";
type Mode = "overlay" | "inline";
type Color = "brand" | "neutral";

export interface SpinnerLoadingProps {
  className?: string;
  color?: Color;
  size?: Size;
  mode?: Mode;
}

const colorClassNames: { [key in Color]: string } = {
  neutral: "text-neutral-600",
  brand: "text-brand-500",
};

const modeClassNames: { [key in Mode]: string } = {
  overlay:
    "fixed top-0 left-0 w-full h-full flex items-center justify-center z-50",
  inline: "relative z-50",
};

const sizeClassNames: { [key in Size]: number } = {
  medium: 21,
  large: 28,
  small: 14,
};

const SpinnerLoading: FC<SpinnerLoadingProps> = memo(
  ({ color = "brand", size = "medium", mode = "inline", className }) => {
    const mainClassNames = composeClassNames([
      colorClassNames[color],
      modeClassNames[mode],
      "text-primary",
      "animate-spin",
      className,
    ]);

    return (
      <div className={mainClassNames} aria-label="loading">
        <svg
          className="text-current"
          viewBox="0 0 50 50"
          height={sizeClassNames[size]}
          width={sizeClassNames[size]}
        >
          <circle
            strokeDasharray="40 60"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="6"
            fill="none"
            cx="25"
            cy="25"
            r="20"
          />
        </svg>
      </div>
    );
  }
);

export default SpinnerLoading;
