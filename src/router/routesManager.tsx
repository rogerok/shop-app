import React, { FC } from "react";
import { RouteObject } from "react-router-dom";

// eslint-disable-next-line import/no-cycle
import Layout from "../components/Layout/Layout";
import AdressPage from "../pages/Adressess/AdressPage";
import CartPage from "../pages/Cart/CartPage";
import CollectionPage from "../pages/Collection/CollectionPage";
import HomePage from "../pages/Home/HomePage";
import AccountPage from "../pages/Account/AccountPage";
import ProductPage from "../pages/Product/ProductPage";
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
