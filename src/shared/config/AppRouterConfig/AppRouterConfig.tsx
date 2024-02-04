import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ErrorPage} from "pages/ErrorPage";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  ERROR = 'error',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.ERROR]: '/*',
}

export const AppRouterConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <ErrorPage />
  },
}