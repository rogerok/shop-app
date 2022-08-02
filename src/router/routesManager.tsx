import React, { FC } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { RoutesNames } from "./routes";

const AccountPage = React.lazy(() => import("../pages/Account/AccountPage"));
const AdressPage = React.lazy(() => import("../pages/Adressess/AdressPage"));
const CartPage = React.lazy(() => import("../pages/Cart/CartPage"));
const CollectionPage = React.lazy(
  () => import("../pages/Collection/CollectionPage")
);
const HomePage = React.lazy(() => import("../pages/Home/HomePage"));

const ProductPage = React.lazy(() => import("../pages/Product/ProductPage"));
const SearchResultPage = React.lazy(
  () => import("../pages/SearchResult/SearchResultPage")
);

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
