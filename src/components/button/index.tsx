import type { ForwardedRef, MouseEventHandler } from "react";
import { forwardRef } from "react";

import { SpinnerLoading } from "@components";
import { composeClassNames } from "@utils";

export type ButtonSize = "big" | "medium" | "small";

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  isLoading?: boolean;
  label: string;
  isDisabled?: boolean;
  className?: string;
}

const Button = forwardRef(
  (
    { isLoading, isDisabled, className, label, onClick }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonClassName = composeClassNames([
      "bg-primary text-white p-4 rounded-m w-full",
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
