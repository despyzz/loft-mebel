import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
