import React from 'react';
import { Code } from 'shared/components/code';
import { DemoLayout } from 'shared/layouts/demo';
import { demoRoutes } from '../nav-routes';

export const AboutPage: React.FC = () => (
  <DemoLayout navRoutes={demoRoutes} subTitle="About these tabs">
    <p>
      This <em>about section</em> exists to explain a bit about the navigational
      buttons (to the top right), functioning as a11y friendly tabs. Each tab
      button links to a sub-route of this Demo section, each of which can be
      referenced via an absolute URL. The middle-click function is also applied
      to the tabs to open the link in a new browser tab.
    </p>
    <p>Each nav button is defined as follows:</p>
    <Code full>{`<NavButton to="/path/to/route">Route Name</NavButton/>`}</Code>
    <p>
      Under the hood, this component passes its <Code>to</Code> prop down to a
      button component. Through a function created to traverse react{' '}
      <Code>children</Code>, each button within this project is able to extract
      meaningful label text, ignoring other ReactNodes, and aplly this text as
      an <Code>aria-label</Code> attribute on the renderd button. This is a
      quality of life feature of my buttons to assist in a11y compliance with
      little effort to the developer. If however the label should be defined
      explicitly, the underlying Button component will accept a{' '}
      <Code>label</Code> prop, overriding the need to travers its children.
    </p>
  </DemoLayout>
);
