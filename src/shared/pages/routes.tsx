import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DemoPage } from './demo';
import { HomePage } from './home';
import { UsersPage } from './users';

export const PageRouter: React.FC = () => (
  <Switch>
    <Route path="/demo" component={DemoPage} />
    <Route path="/users" component={UsersPage} />
    <Route path="/" component={HomePage} />
  </Switch>
);
