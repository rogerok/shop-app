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
import { RoutesNames } from "./routes";
import SearchResultPage from "../pages/SearchResult/SearchResultPage";

// eslint-disable-next-line @typescript-eslint/naming-convention

export const routes: RouteObject[] = [
  {
    path: RoutesNames.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: RoutesNames.ADRESS, element: <AdressPage /> },
      {
        path: RoutesNames.COLLECTION_PAGE,
        element: <CollectionPage />,
      },
      { path: RoutesNames.PRODUCT_PAGE, element: <ProductPage /> },
      { path: RoutesNames.CART, element: <CartPage /> },
      { path: RoutesNames.ACCOUNT, element: <AccountPage /> },
      { path: RoutesNames.SEARCH_RESULT_PAGE, element: <SearchResultPage /> },
    ],
  },
];
