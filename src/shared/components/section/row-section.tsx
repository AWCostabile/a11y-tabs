import React, { CSSProperties } from 'react';
import { classNames } from 'shared/utils/classnames';
import { ISectionFooter, SectionFooter } from './section-footer';
import { ISectionHeader, SectionHeader } from './section-header';

interface ISectionProps {
  className?: string;
  header?: ISectionHeader;
  footer?: ISectionFooter;
}

interface IRowSectionProps {
  className?: string;
  grow?: boolean;
  shrink?: boolean;
  style?: CSSProperties;
}

export const RowSectionCell: React.FC<IRowSectionProps> = ({
  className,
  children,
  grow = false,
  shrink = true,
  style,
}) => (
  <div
    className={classNames('row-section-cell', className)}
    style={{ flex: `${grow ? 1 : 0} ${shrink ? 1 : 0} auto`, ...style }}
  >
    {children}
  </div>
);

export const RowSection: React.FC<ISectionProps & IRowSectionProps> = ({
  className,
  children,
  footer,
  header,
}) => (
  <section className={classNames('section', className)}>
    {header && <SectionHeader {...header} />}
    <div className={classNames('section-body', 'row-section')}>{children}</div>
    {footer && <SectionFooter {...footer} />}
  </section>
);
