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
        ]}
        userInfo={{
          givenName: 'Anthony',
          familyName: 'Costabile',
        }}
      />
    </header>
    <main className="app-body">{children}</main>
    <footer className="app-footer">
      <div className="app-footer-content">Anthony Costabile &copy; 2021</div>
    </footer>
  </div>
);
