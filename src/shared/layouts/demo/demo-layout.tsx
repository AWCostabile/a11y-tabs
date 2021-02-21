import React from 'react';
import { DocumentTitle } from 'shared/components/document-title';
import { ColSection } from 'shared/components/section';
import { INavRoute } from 'shared/types/nav-routes';

interface IDemoLayout {
  navRoutes: INavRoute[];
  subTitle?: string;
}

export const DemoLayout: React.FC<IDemoLayout> = ({
  children,
  navRoutes,
  subTitle,
}) => (
  <DocumentTitle title={subTitle}>
    <ColSection
      header={{
        actions: navRoutes.map(({ path, label }) => ({ path, label })),
        title: subTitle,
      }}
    >
      {children}
    </ColSection>
  </DocumentTitle>
);
