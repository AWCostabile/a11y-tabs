import React from 'react';
import { classNames } from 'shared/utils/classnames';

interface IUiActionContainerProps {
  align?: 'left' | 'right';
  className?: string;
  isTabList?: boolean;
}

export const UiActionContainer: React.FC<IUiActionContainerProps> = ({
  align = 'left',
  children,
  className,
  isTabList,
}) => (
  <div
    className={classNames(
      'ui-action-list',
      align === 'right' && 'align-right',
      className,
    )}
    role={isTabList ? 'tablist' : ''}
  >
    {children}
  </div>
);
