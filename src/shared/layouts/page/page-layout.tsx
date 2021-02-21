import React, { ReactNode } from 'react';
import { DocumentTitle } from 'shared/components/document-title';
import { classNames } from 'shared/utils/classnames';
import './page-layout.scss';

interface IPageProps {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  title?: string;
}

export const PageLayout: React.FC<IPageProps> = ({
  children,
  className,
  header,
  footer,
  title,
}) => (
  <DocumentTitle title={title}>
    <div className={classNames('page-layout', className)}>
      {header && <div className="page-header">{header}</div>}
      <div className="page-body">{children}</div>
      {footer && <div className="page-footer">{footer}</div>}
    </div>
  </DocumentTitle>
);
