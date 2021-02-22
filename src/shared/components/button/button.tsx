import React, { PropsWithChildren, RefObject } from 'react';
import { classNames } from 'shared/utils/classnames';
import { extractStrings } from 'shared/utils/extract-strings';

export interface IButtonProps {
  ariaHidden?: boolean;
  className?: string;
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
    { className, children, disabled, label, onClick, onMiddleClick, primary },
    ref,
  ) => {
    const ariaLabel = label || extractStrings(children);

    return (
      <button
        aria-label={ariaLabel}
        className={classNames(
          'button',
          primary && 'primary',
          disabled && 'disabled',
          className,
        )}
        onClick={disabled ? undefined : onClick}
        onMouseUp={(event) => {
          if (!disabled && onMiddleClick && event.button === 1) {
            event.preventDefault();
            onMiddleClick();
          }
        }}
        ref={ref}
      >
        <span className="button-label">{children}</span>
      </button>
    );
  },
);
