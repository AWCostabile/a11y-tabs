import React, { PropsWithChildren, RefObject } from 'react';
import { IUiComponent } from 'shared/types/ui-component';
import { classNames } from 'shared/utils/classnames';
import { extractStrings } from 'shared/utils/extract-strings';

export interface IButtonProps extends IUiComponent {
  ariaHidden?: boolean;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
  onMiddleClick?: () => void;
  primary?: boolean;
  ref?: RefObject<HTMLButtonElement>;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IButtonProps>
>(
  (
    {
      className,
      children,
      disabled,
      label,
      onClick,
      onMiddleClick,
      primary,
      style,
    },
    ref,
  ) => {
    const ariaLabel = label || extractStrings(children);

    return (
      <button
        aria-label={ariaLabel}
        aria-hidden={disabled}
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
            onMiddleClick();
          }
        }}
        ref={ref}
        style={style}
      >
        <span className="button-label">{children}</span>
      </button>
    );
  },
);
