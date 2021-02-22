import React from 'react';
import { NavBar } from 'shared/components/nav-bar';
import './app-layout.scss';

export const AppLayout: React.FC = ({ children }) => (
  <div className="app-layout">
    <header className="app-header">
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
    </header>
    <main className="app-body">{children}</main>
    <footer className="app-footer">Anthony Costabile &copy; 2021</footer>
  </div>
);
