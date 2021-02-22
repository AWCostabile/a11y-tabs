import React, { AriaAttributes } from 'react';
import { IUiComponent } from 'shared/types/ui-component';
import { classNames } from 'shared/utils/classnames';
import { ISectionProps } from './col-section';
import { ISectionFooter, SectionFooter } from './section-footer';
import { ISectionHeader, SectionHeader } from './section-header';

interface IRowSectionProps extends IUiComponent {
  ariaLabel?: AriaAttributes['aria-labelledby'];
  ariaRole?: AriaAttributes['aria-roledescription'];
  grow?: boolean;
  shrink?: boolean;
}

export const RowSectionCell: React.FC<IRowSectionProps> = ({
  ariaRole,
  className,
  children,
  grow = false,
  shrink = true,
  style,
}) => (
  <div
    className={classNames('row-section-cell', className)}
    role={ariaRole}
    style={{ flex: `${grow ? 1 : 0} ${shrink ? 1 : 0} auto`, ...style }}
  >
    {children}
  </div>
);

export const RowSection: React.FC<ISectionProps & IRowSectionProps> = ({
  ariaLabel,
  ariaRole,
  className,
  children,
  footer,
  header,
  style,
}) => {
  const sectionHeader = header as ISectionHeader;
  const sectionFooter = footer as ISectionFooter;

  return (
    <section className={classNames('section', className)} style={style}>
      {sectionHeader ? (
        <SectionHeader {...sectionHeader} />
      ) : (
        header && <SectionHeader title={header} />
      )}
      <div
        aria-labelledby={ariaLabel}
        className={classNames('section-body', 'row-section')}
        role={ariaRole}
      >
        {children}
      </div>
      {sectionFooter ? (
        <SectionFooter {...sectionFooter} />
      ) : (
        footer && <SectionFooter content={footer} />
      )}
    </section>
  );
};
