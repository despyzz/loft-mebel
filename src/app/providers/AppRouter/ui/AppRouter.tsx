import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRouterConfig} from "shared/config/AppRouterConfig/AppRouterConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>LOADING...</h1>}>
      <Routes>
        {Object.values(AppRouterConfig).map(({element, path}) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;