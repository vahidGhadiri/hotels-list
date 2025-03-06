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
        dir="ltr"
        className={composeClassNames([
          "flex items-center border border-gray text-secondary rounded-m p-4",
          className,
        ])}
      >
        {startIcon && <Icon {...startIcon} className="mr-2" />}

        <input
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          name={name}
          className="w-full outline-none"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
        />
        {endElement && <span className="ml-2">{endElement}</span>}
      </div>
    );
  }
);

export default Input;
