import React, { ReactNode } from 'react';
import {
  IUiAction,
  UiAction,
  UiActionContainer,
} from 'shared/components/ui-action';
import { classNames } from 'shared/utils/classnames';

export interface ISectionFooter {
  actions?: Array<Omit<IUiAction, 'icon'>>;
  className?: string;
  content?: ReactNode;
  topBorder?: boolean;
}

export const SectionFooter: React.FC<ISectionFooter> = ({
  actions,
  className,
  content,
  topBorder,
}) => (
  <div
    className={classNames(
      'section-footer',
      topBorder && 'top-border',
      className,
    )}
  >
    {content && <div className="section-footer-content">{content}</div>}
    {actions && (
      <UiActionContainer align="right" className="section-footer-actions">
        {actions.map((action, index) => (
          <UiAction key={index} {...action} />
        ))}
      </UiActionContainer>
    )}
  </div>
);
