import type { ForwardedRef, MouseEventHandler } from "react";
import { forwardRef } from "react";

import { SpinnerLoading } from "@components";
import { composeClassNames } from "@utils";

type ButtonSize = "big" | "medium" | "small";
type ButtonMode = "primary" | "tertiary";

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  size?: ButtonSize;
  mode?: ButtonMode;
  label: string;
  isDisabled?: boolean;
  className?: string;
}

const Button = forwardRef(
  (
    {
      isLoading,
      isDisabled,
      className,
      label,
      onClick,
      mode = "primary",
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonModeClassNames: { [key in ButtonMode]: string } = {
      tertiary: "bg-white border border-primary text-primary",
      primary: "bg-primary text-white",
    };

    const buttonClassName = composeClassNames([
      "py-3 px-4 rounded-s w-full text-body-3",
      buttonModeClassNames[mode],
      isDisabled && "bg-neutral",
      className,
    ]);

    const onButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      if (!isDisabled && !isLoading) {
        onClick(event);
      }
    };

    return (
      <button
        className={buttonClassName}
        onClick={onButtonClick}
        disabled={isDisabled}
        ref={ref}
      >
        {isLoading ? <SpinnerLoading size="medium" /> : <span>{label}</span>}
      </button>
    );
  }
);

export default Button;
