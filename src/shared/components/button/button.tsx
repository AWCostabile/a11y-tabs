import React, { AriaAttributes, PropsWithChildren, RefObject } from 'react';
import { IUiComponent } from 'shared/types/ui-component';
import { classNames } from 'shared/utils/classnames';
import { extractStrings } from 'shared/utils/extract-strings';
import { ClickEvent, FocusEvent } from 'shared/types/general';

export interface IButtonProps extends IUiComponent {
  ariaHidden?: boolean;
  ariaRole?: AriaAttributes['aria-roledescription'];
  disabled?: boolean;
  id?: string;
  label?: string;
  onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
  onClick?: (event: ClickEvent<HTMLButtonElement>) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  onMiddleClick?: (event: ClickEvent<HTMLButtonElement>) => void;
  primary?: boolean;
  selected?: boolean;
  ref?: RefObject<HTMLButtonElement>;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IButtonProps>
>(
  (
    {
      ariaHidden,
      ariaRole,
      className,
      children,
      disabled,
      label,
      onClick,
      onMiddleClick,
      primary,
      selected,
      ...rest
    },
    ref,
  ) => {
    const ariaLabel = label || extractStrings(children);

    return (
      <button
        {...rest}
        aria-label={ariaLabel}
        aria-hidden={disabled || ariaHidden}
        aria-selected={selected}
        className={classNames(
          'button',
          primary && 'primary',
          disabled && 'disabled',
          className,
        )}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        onMouseUp={(event) => {
          if (!disabled && onMiddleClick && event.button === 1) {
            event.preventDefault();
            onMiddleClick(event);
          }
        }}
        ref={ref}
        role={ariaRole}
      >
        <span className="button-label">{children}</span>
      </button>
    );
  },
);
