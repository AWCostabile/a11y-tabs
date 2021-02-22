import React from 'react';
import { Code } from 'shared/components/code';
import { DemoLayout } from 'shared/layouts/demo';
import { demoRoutes } from '../nav-routes';

export const AboutPage: React.FC = () => (
  <DemoLayout navRoutes={demoRoutes} subTitle="About these tabs">
    About
    <p>
      This about section is only here to explain the fact that the tabs to the
      top right are navigational buttons, functioning as a11y friendly tabs.
      Each tab button links to a sub-route of this Demo section, each of which
      can be referenced via its associated URL, and can be opened in a new tab
      using the middle-click function.
    </p>
    <Code>{`<Tab />`}</Code>
    <p></p>
  </DemoLayout>
);
