import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./app/providers/ErrorBoundary";
import {StoreProvider} from "./app/providers/StoreProvider";
import {ScrollToTop} from "./shared/lib/components/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ScrollToTop/>
          <App/>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
