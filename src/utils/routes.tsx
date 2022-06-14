import React, { FC } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Adress from "../pages/adress/Adress";
import Cart from "../pages/cart/Cart";
import Collection from "../pages/collection/Collection";
import Home from "../pages/home/Home";
import Account from "../pages/account/Account";

// eslint-disable-next-line @typescript-eslint/naming-convention
enum ROUTES_PATHS {
  HOME = "/",
  ADRESS = "adress",
  ACCOUNT = "account",
  CART = "cart",
  COLLECTION = "collection/:category",
}

export const routes: RouteObject[] = [
  {
    path: ROUTES_PATHS.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES_PATHS.ADRESS, element: <Adress /> },
      { path: ROUTES_PATHS.COLLECTION, element: <Collection /> },
      { path: ROUTES_PATHS.CART, element: <Cart /> },
      { path: ROUTES_PATHS.ACCOUNT, element: <Account /> },
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
