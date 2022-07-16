import React, { FC } from "react";
import { RouteObject } from "react-router-dom";

// eslint-disable-next-line import/no-cycle
import Layout from "../components/Layout/Layout";
import AdressPage from "../pages/adress/AdressPage";
import CartPage from "../pages/cart/CartPage";
import CollectionPage from "../pages/collection/CollectionPage";
import HomePage from "../pages/home/HomePage";
import AccountPage from "../pages/account/AccountPage";
import ProductPage from "../pages/product/ProductPage";
import { ROUTES_PATHS } from "./routes";

// eslint-disable-next-line @typescript-eslint/naming-convention

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
      { path: ROUTES_PATHS.PRODUCT_PAGE, element: <ProductPage /> },
      { path: ROUTES_PATHS.CART, element: <CartPage /> },
      { path: ROUTES_PATHS.ACCOUNT, element: <AccountPage /> },
    ],
  },
];
