import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./app/providers/ErrorBoundary";
import {StoreProvider} from "./app/providers/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App/>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
