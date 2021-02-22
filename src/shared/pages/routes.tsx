import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DemoPage } from './demo';
import { HomePage } from './home';

export const PageRouter: React.FC = () => (
  <Switch>
    <Route path="/demo" component={DemoPage} />
    <Route path="/" component={HomePage} />
    <Redirect to="/" />
  </Switch>
);
