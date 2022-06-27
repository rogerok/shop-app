import React, { FC } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import AdressPage from "../pages/adress/AdressPage";
import CartPage from "../pages/cart/CartPage";
import CollectionPage from "../pages/collection/CollectionPage";
import HomePage from "../pages/home/HomePage";
import AccountPage from "../pages/account/AccountPage";
import ProductPage from "../pages/product/ProductPage";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ROUTES_PATHS = {
  HOME: "/",
  ADRESS: "adress",
  ACCOUNT: "account",
  CART: "cart",
  COLLECTION: "collection",
  COLLECTION_CATEGORY: "collection/:category",
  COLLECTION_PRODUCT: "collection/:category/:id",
} as const;

export const routes: RouteObject[] = [
  {
    path: ROUTES_PATHS.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES_PATHS.ADRESS, element: <AdressPage /> },
      {
        path: ROUTES_PATHS.COLLECTION_CATEGORY,
        element: <CollectionPage />,
      },
      { path: ROUTES_PATHS.COLLECTION_PRODUCT, element: <ProductPage /> },
      { path: ROUTES_PATHS.CART, element: <CartPage /> },
      { path: ROUTES_PATHS.ACCOUNT, element: <AccountPage /> },
    ],
  },
];

/* export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "about-route",
    title: "About",
    path: "/about",
    enabled: true,
    component: About,
  },
  {
    key: "products-route",
    title: "Products",
    path: "/products",
    enabled: true,
    component: Products,
  },
];
 */
