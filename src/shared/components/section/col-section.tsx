import React, { AriaAttributes, ReactNode } from 'react';
import { IUiComponent } from 'shared/types/ui-component';
import { classNames } from 'shared/utils/classnames';
import { ISectionFooter, SectionFooter } from './section-footer';
import { ISectionHeader, SectionHeader } from './section-header';

export interface ISectionProps extends IUiComponent {
  ariaRole?: AriaAttributes['aria-roledescription'];
  header?: ISectionHeader | ReactNode;
  footer?: ISectionFooter | ReactNode;
}

export const ColSection: React.FC<ISectionProps> = ({
  ariaRole,
  children,
  className,
  header,
  footer,
  style,
}) => {
  const sectionHeader = header as ISectionHeader;
  const sectionFooter = footer as ISectionFooter;

  return (
    <section className={classNames('section', className)} style={style}>
      {sectionHeader?.actions || sectionHeader?.title ? (
        <SectionHeader {...sectionHeader} />
      ) : (
        header && <SectionHeader title={header} />
      )}
      <div className="section-body" role={ariaRole}>
        {children}
      </div>
      {sectionFooter?.actions || sectionFooter?.content ? (
        <SectionFooter {...sectionFooter} />
      ) : (
        footer && <SectionFooter content={footer} />
      )}
    </section>
  );
};
