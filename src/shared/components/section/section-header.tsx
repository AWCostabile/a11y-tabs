import React, { ReactNode } from 'react';
import {
  IUiAction,
  UiAction,
  UiActionContainer,
} from 'shared/components/ui-action';
import { classNames } from 'shared/utils/classnames';

export interface ISectionHeader {
  actions?: IUiAction[];
  bottomBorder?: boolean;
  className?: string;
  isTabList?: boolean;
  selectedAction?: string;
  title?: ReactNode;
}

export const SectionHeader: React.FC<ISectionHeader> = ({
  actions,
  selectedAction,
  bottomBorder,
  className,
  isTabList,
  title,
}) => (
  <div
    className={classNames(
      'section-header',
      bottomBorder && 'bottom-border',
      className,
    )}
  >
    {title && <div className="section-header-title">{title}</div>}
    {actions && (
      <UiActionContainer
        align="right"
        className="section-header-actions"
        isTabList={isTabList}
      >
        {actions.map((action, index) => (
          <UiAction
            key={action.id || index}
            selected={!!selectedAction && selectedAction === action.id}
            {...action}
          />
        ))}
      </UiActionContainer>
    )}
  </div>
);
