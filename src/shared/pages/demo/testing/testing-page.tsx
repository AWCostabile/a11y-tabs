import React from 'react';
import { DemoLayout } from 'shared/layouts/demo';
import { demoRoutes } from '../nav-routes';

export const TestingPage: React.FC = () => (
  <DemoLayout navRoutes={demoRoutes} subTitle="How to test this project">
    Testing
  </DemoLayout>
);
