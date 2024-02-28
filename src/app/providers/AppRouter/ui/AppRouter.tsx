import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRouterConfig} from "shared/config/AppRouterConfig/AppRouterConfig";
import Loader from "widgets/Loader";
import RequireAuth from "./RequireAuth";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {Object.values(AppRouterConfig).map(
          ({element, path, authOnly}) => (
            <Route
              key={path}
              path={path}
              element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
          )
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;