import React, { PropsWithChildren, RefObject } from 'react';
import { classNames } from 'shared/utils/classnames';
import { extractStrings } from 'shared/utils/extract-strings';

interface IButtonProps {
  ariaHidden?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
  primary?: boolean;
  ref?: RefObject<HTMLButtonElement>;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IButtonProps>
>(({ className, children, disabled, label, onClick, primary }, ref) => {
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
      ref={ref}
    >
      <span className="button-label">{children}</span>
    </button>
  );
});
