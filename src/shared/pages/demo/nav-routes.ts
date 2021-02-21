import { INavRoute } from 'shared/types/nav-routes';
import { AboutPage } from './about';
import { TestingPage } from './testing';

export const demoRoutes: Array<
  INavRoute & { component: React.ComponentType }
> = [
  {
    component: AboutPage,
    label: 'About',
    path: '/demo/about',
  },
  {
    component: TestingPage,
    label: 'Testing',
    path: '/demo/testing',
  },
];
