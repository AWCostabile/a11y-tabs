import React, { ReactNode } from 'react';
import { Button } from 'shared/components/button';
import { NavButton } from 'shared/components/nav-button';

export interface IUiAction {
  action?: () => void;
  disabled?: boolean;
  id?: string;
  icon?: ReactNode;
  path?: string;
  label?: ReactNode;
  primary?: boolean;
  selected?: boolean;
  tabGroup?: boolean;
}

export const UiAction: React.FC<IUiAction> = ({
  action,
  disabled,
  icon,
  id,
  label,
  path,
  primary,
  selected,
}) => {
  if (icon) {
    return (
      <div id={id} className="ui-action-icon">
        <div className="icon" onClick={disabled ? undefined : action}>
          {icon}
        </div>
      </div>
    );
  }

  const buttonProps = {
    className: 'ui-action-button',
    disabled,
    id,
    primary,
    selected,
  };

  return path ? (
    <NavButton {...buttonProps} to={path}>
      {label}
    </NavButton>
  ) : (
    <Button {...buttonProps} onClick={action}>
      {label}
    </Button>
  );
};
