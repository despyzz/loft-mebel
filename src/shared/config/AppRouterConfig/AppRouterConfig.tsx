import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {CartPage} from "pages/CartPage";
import {ProfilePage} from "pages/ProfilePage";
import {CatalogPage} from "pages/CatalogPage";
import {ContactsPage} from "pages/ContactsPage";
import {ProductPage} from "pages/ProductPage";
import {WishlistPage} from "pages/WishlistPage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  ERROR = 'error',
  CART = 'cart',
  PROFILE = 'profile',
  CATALOG = 'catalog',
  CONTACTS = 'contacts',
  PRODUCT = 'product',
  WISHLIST = 'wishlist',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.PRODUCT]: '/product/', // :id
  [AppRoutes.WISHLIST]: '/wishlist',
  [AppRoutes.ERROR]: '/*'
}

export const AppRouterConfig: Record<AppRoutes, AppRoutesProps> = {
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
    element: <CartPage />,
    authOnly: true
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <NotFoundPage />
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <CatalogPage />
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <ContactsPage />
  },
  [AppRoutes.PRODUCT]: {
    path: `${RoutePath.product}:id`,
    element: <ProductPage />
  },
  [AppRoutes.WISHLIST]: {
    path: RoutePath.wishlist,
    element: <WishlistPage />,
    authOnly: true
  }
}