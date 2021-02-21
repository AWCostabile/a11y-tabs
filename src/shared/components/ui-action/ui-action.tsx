import React, { ReactNode } from 'react';
import { Button } from 'shared/components/button';
import { NavButton } from 'shared/components/nav-button';

export interface IUiAction {
  action?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  path?: string;
  label?: ReactNode;
  primary?: boolean;
}

export const UiAction: React.FC<IUiAction> = ({
  action,
  disabled,
  icon,
  label,
  path,
  primary,
}) => {
  if (icon) {
    return (
      <div className="ui-action-icon">
        <div className="icon" onClick={disabled ? undefined : action}>
          {icon}
        </div>
      </div>
    );
  }

  const buttonProps = { disabled, primary };

  return (
    <div className="ui-action-button">
      {path ? (
        <NavButton {...buttonProps} to={path}>
          {label}
        </NavButton>
      ) : (
        <Button {...buttonProps} onClick={action}>
          {label}
        </Button>
      )}
    </div>
  );
};
