import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ActiveKeysProvider } from 'shared/components/active-keys';
import { TitleProvider } from 'shared/components/document-title';
import { TRACKED_KEYS, TrackedKeyType } from 'shared/constants/app';
import { AppLayout } from 'shared/layouts/app';
import { PageRouter } from 'shared/pages/routes';
import 'shared/styles/global-styles.scss';

render(
  <BrowserRouter>
    <ActiveKeysProvider<TrackedKeyType> trackedKeys={TRACKED_KEYS}>
      <TitleProvider>
        <AppLayout>
          <PageRouter />
        </AppLayout>
      </TitleProvider>
    </ActiveKeysProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
