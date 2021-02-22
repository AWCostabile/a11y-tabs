import React, { ReactNode } from 'react';
import { classNames } from 'shared/utils/classnames';
import { ISectionFooter, SectionFooter } from './section-footer';
import { ISectionHeader, SectionHeader } from './section-header';

interface ISectionProps {
  className?: string;
  header?: ISectionHeader | ReactNode;
  footer?: ISectionFooter | ReactNode;
}

export const ColSection: React.FC<ISectionProps> = ({
  children,
  className,
  header,
  footer,
}) => {
  const sectionHeader = header as ISectionHeader;
  const sectionFooter = footer as ISectionFooter;

  return (
    <section className={classNames('section', className)}>
      {sectionHeader?.actions || sectionHeader?.title ? (
        <SectionHeader {...sectionHeader} />
      ) : (
        header && <SectionHeader title={header} />
      )}
      <div className="section-body">{children}</div>
      {sectionFooter?.actions || sectionFooter?.content ? (
        <SectionFooter {...sectionFooter} />
      ) : (
        footer && <SectionFooter content={footer} />
      )}
    </section>
  );
};
