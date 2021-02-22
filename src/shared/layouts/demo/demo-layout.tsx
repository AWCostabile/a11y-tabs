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

  console.log(match);

  return (
    <DocumentTitle title={subTitle}>
      <ColSection
        header={{
          actions: navRoutes.map(({ path, label }) => ({
            label,
            path,
            primary: match.path === path,
          })),
          title: subTitle,
        }}
      >
        {children}
      </ColSection>
    </DocumentTitle>
  );
};
