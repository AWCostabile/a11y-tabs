import React, { ReactNode } from 'react';
import {
  ISectionFooter,
  ISectionHeader,
  SectionFooter,
  SectionHeader,
} from 'shared/components/section';
import { classNames } from 'shared/utils/classnames';

interface ICardProps {
  className?: string;
  header?: ISectionHeader | ReactNode;
  footer?: ISectionFooter | ReactNode;
}

const cardBodyName = ({ header, footer }: ICardProps) => {
  if (header && footer) {
    return 'body with-hf';
  }

  if (header) {
    return 'body with-h';
  }

  if (footer) {
    return 'body with-f';
  }

  return 'body';
};

export const Card: React.FC<ICardProps> = ({
  children,
  className,
  footer,
  header,
}) => {
  const sectionFooter = footer as ISectionFooter;
  const sectionHeader = header as ISectionHeader;

  return (
    <div className={classNames('card', className)}>
      {header && (
        <div className="header">
          {sectionHeader.actions || sectionHeader.title ? (
            <SectionHeader
              {...sectionHeader}
              className={classNames(
                sectionHeader.className,
                'card-section-header',
              )}
            />
          ) : (
            header
          )}
        </div>
      )}
      <div className={cardBodyName({ header, footer })}>{children}</div>
      {footer && (
        <div className="footer">
          {sectionFooter.actions || sectionFooter.content ? (
            <SectionFooter {...sectionFooter} />
          ) : (
            header
          )}
        </div>
      )}
    </div>
  );
};
