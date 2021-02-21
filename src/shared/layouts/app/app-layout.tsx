import React from 'react';
import { NavBar } from 'shared/components/nav-bar';
import './app-layout.scss';

export const AppLayout: React.FC = ({ children }) => (
  <div className="app-layout">
    <div className="app-header">
      <NavBar
        navRoutes={[
          { path: '/home', label: 'Home' },
          { path: '/demo', label: 'Demo' },
          { path: '/users', label: 'Users' },
        ]}
        userInfo={{
          givenName: 'Anthony',
          familyName: 'Costabile',
        }}
      />
    </div>
    <div className="app-body">{children}</div>
    <div className="app-footer">Anthony Costabile &copy; 2021</div>
  </div>
);
