import React from 'react';
import { DemoLayout } from 'shared/layouts/demo';
import { demoRoutes } from '../nav-routes';

export const AboutPage: React.FC = () => (
  <DemoLayout navRoutes={demoRoutes} subTitle="About these tabs">
    About
  </DemoLayout>
);
