import { INavRoute } from 'shared/types/nav-routes';
import { AboutPage } from './about';
import { RobotPage } from './robot';
import { BonusApiTestingPage } from './bonus-api';

export const demoRoutes: Array<
  INavRoute & { component: React.ComponentType }
> = [
  {
    component: AboutPage,
    id: 'about',
    label: 'About',
    path: '/demo/about',
  },
  {
    component: RobotPage,
    id: 'robot',
    label: 'Robot Game',
    path: '/demo/robot',
  },
  {
    component: BonusApiTestingPage,
    id: 'bonus',
    label: 'Bonus Page',
    path: '/demo/bonus-page',
  },
];
