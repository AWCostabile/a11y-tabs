import React from 'react';
import { useRouteMatch } from 'react-router-dom';
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
}) => {
  const match = useRouteMatch();

  return (
    <DocumentTitle title={subTitle}>
      <ColSection
        ariaRole="tabpanel"
        header={{
          actions: navRoutes.map(({ path, label }) => ({
            label,
            path,
            primary: match.path === path,
          })),
          bottomBorder: true,
          title: subTitle,
        }}
      >
        {children}
      </ColSection>
    </DocumentTitle>
  );
};
