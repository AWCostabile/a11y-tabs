import React from 'react';
import { classNames } from 'shared/utils/classnames';
import { ISectionFooter, SectionFooter } from './section-footer';
import { ISectionHeader, SectionHeader } from './section-header';

interface ISectionProps {
  className?: string;
  header?: ISectionHeader;
  footer?: ISectionFooter;
}

export const ColSection: React.FC<ISectionProps> = ({
  children,
  className,
  header,
  footer,
}) => (
  <section className={classNames('section', className)}>
    {header && <SectionHeader {...header} />}
    <div className="section-body">{children}</div>
    {footer && <SectionFooter {...footer} />}
  </section>
);
