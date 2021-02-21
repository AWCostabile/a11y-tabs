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
  title?: ReactNode;
}

export const SectionHeader: React.FC<ISectionHeader> = ({
  actions,
  bottomBorder,
  className,
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
      <UiActionContainer align="right" className="section-header-actions">
        {actions.map((action, index) => (
          <UiAction key={index} {...action} />
        ))}
      </UiActionContainer>
    )}
  </div>
);
