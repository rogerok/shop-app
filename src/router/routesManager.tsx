import React, { FC } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { RoutesNames } from "./routes";

const AccountPage = React.lazy(
  () => import("../pages/AccountPage/AccountPage")
);
const AdressPage = React.lazy(
  () => import("../pages/AdressessPages/AdressPage")
);
const CartPage = React.lazy(() => import("../pages/CartPage/CartPage"));
const CollectionPage = React.lazy(
  () => import("../pages/CollectionPage/CollectionPage")
);
const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));

const ProductPage = React.lazy(
  () => import("../pages/ProductPage/ProductPage")
);
const SearchResultPage = React.lazy(
  () => import("../pages/SearchResultPage/SearchResultPage")
);

const RegisterPage = React.lazy(
  () => import("../pages/RegisterPage/RegisterPage")
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
      { path: RoutesNames.REGISTER_PAGE, element: <RegisterPage /> },
    ],
  },
];
