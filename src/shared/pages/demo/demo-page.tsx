import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLayout } from 'shared/layouts/page';
import { demoRoutes } from './nav-routes';

export const DemoPage: React.FC = () => {
  return (
    <PageLayout header={<h1>Demo</h1>} title="Demo Page">
      <Switch>
        {demoRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect from="/demo" to="/demo/about" />
      </Switch>
    </PageLayout>
  );
};
