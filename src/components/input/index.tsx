import { forwardRef } from "react";
import type {
  ClipboardEventHandler,
  KeyboardEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  ReactElement,
} from "react";

import type { IconProps } from "@components";
import { composeClassNames } from "@utils";
import { Icon } from "@components";

export interface InputProps {
  type?: "text" | "password" | "number" | "tel";
  endElement?: ReactElement;
  value?: string | number;
  startIcon?: IconProps;
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  className?: string;
  name?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onPaste?: ClipboardEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      value,
      placeholder,
      isDisabled,
      isReadOnly,
      className,
      name,
      startIcon,
      endElement,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onPaste,
    },
    ref
  ) => {
    return (
      <div
        className={composeClassNames([
          "flex items-center border border-gray text-secondary rounded-m px-4 py-2 text-caption-2",
          className,
        ])}
      >
        {startIcon && <Icon {...startIcon} className="mr-2" />}
        <input
          className="w-full outline-none"
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          onBlur={onBlur}
          value={value}
          type={type}
          name={name}
          ref={ref}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onPaste={onPaste}
          onFocus={onFocus}
        />
        {endElement && <span className="ml-2">{endElement}</span>}
      </div>
    );
  }
);

export default Input;
