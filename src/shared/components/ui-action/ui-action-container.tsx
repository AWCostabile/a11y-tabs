import React from 'react';
import { classNames } from 'shared/utils/classnames';

interface IUiActionContainerProps {
  align?: 'left' | 'right';
  className?: string;
}

export const UiActionContainer: React.FC<IUiActionContainerProps> = ({
  align = 'left',
  children,
  className,
}) => (
  <div
    className={classNames(
      'ui-action-list',
      align === 'right' && 'align-right',
      className,
    )}
  >
    {children}
  </div>
);
