import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRouterConfig} from "shared/config/AppRouterConfig/AppRouterConfig";
import Loader from "widgets/Loader";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
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