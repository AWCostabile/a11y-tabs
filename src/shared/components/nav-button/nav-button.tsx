import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'shared/components/button';

interface INavButtonProps {
  className?: string;
  to: string;
}

export const NavButton: React.FC<INavButtonProps> = ({
  children,
  className,
  to,
}) => {
  const history = useHistory();

  return (
    <Button className={className} onClick={() => history.push(to)}>
      {children}
    </Button>
  );
};
