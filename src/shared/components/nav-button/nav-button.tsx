import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, IButtonProps } from 'shared/components/button';

interface INavButtonProps
  extends Omit<IButtonProps, 'onClick' | 'onMiddleClick'> {
  to: string;
}

export const NavButton: React.FC<INavButtonProps> = ({
  children,
  to,
  ...props
}) => {
  const history = useHistory();

  return (
    <Button
      {...props}
      onClick={() => history.push(to)}
      onMiddleClick={() => window.open(to)}
    >
      {children}
    </Button>
  );
};
