import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {CartPage} from "pages/CartPage";
import {ProfilePage} from "pages/ProfilePage";
import {CatalogPage} from "pages/CatalogPage";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  ERROR = 'error',
  CART = 'cart',
  PROFILE = 'profile',
  CATALOG = 'catalog',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.ERROR]: '/*'
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
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <NotFoundPage />
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <CatalogPage />
  },
}