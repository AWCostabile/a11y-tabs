import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, IButtonProps } from 'shared/components/button';
import { TrackedKeyType } from 'shared/constants/app';
import { ClickEvent } from 'shared/types/general';
import { ActiveKeysContext } from '../active-keys';
import { IActiveKeysContext } from '../active-keys/active-keys-types';

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
  const { isActive }: IActiveKeysContext<TrackedKeyType> = useContext(
    ActiveKeysContext,
  );

  const onCurrentWindow = () => history.push(to);
  const onNewWindow = (event: ClickEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget?.blur();

    window.open(to);
  };

  return (
    <Button
      {...props}
      ariaRole="tab"
      onClick={isActive('Control') ? onNewWindow : onCurrentWindow}
      onMiddleClick={onNewWindow}
    >
      {children}
    </Button>
  );
};
