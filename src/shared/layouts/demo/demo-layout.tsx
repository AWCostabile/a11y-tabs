import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { DocumentTitle } from 'shared/components/document-title';
import { ColSection } from 'shared/components/section';
import { INavRoute } from 'shared/types/nav-routes';

interface IDemoLayout {
  navRoutes: INavRoute[];
  subTitle?: string;
  tabLabel?: string;
}

export const DemoLayout: React.FC<IDemoLayout> = ({
  children,
  navRoutes,
  subTitle,
  tabLabel,
}) => {
  const match = useRouteMatch();

  return (
    <DocumentTitle title={subTitle}>
      <ColSection
        ariaRole="tabpanel"
        ariaLabel={tabLabel}
        header={{
          actions: navRoutes.map(({ id, path, label }) => {
            const selected = match.path === path;

            return {
              label,
              id,
              path,
              primary: selected,
              selected,
            };
          }),
          bottomBorder: true,
          title: subTitle,
          isTabList: true,
        }}
      >
        {children}
      </ColSection>
    </DocumentTitle>
  );
};
