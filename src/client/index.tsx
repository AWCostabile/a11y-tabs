import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from 'shared/layouts/app';
import { PageRouter } from 'shared/pages/routes';
import { TitleProvider } from 'shared/components/document-title';
import 'shared/styles/global-styles.scss';

render(
  <BrowserRouter>
    <TitleProvider>
      <AppLayout>
        <PageRouter />
      </AppLayout>
    </TitleProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
