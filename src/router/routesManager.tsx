import React, { FC } from "react";
import { Route, RouteObject, Routes } from "react-router-dom";

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

const SignInPage = React.lazy(() => import("../pages/SignInPage/SignInPage"));

const MissPage = React.lazy(() => import("../pages/MissPage/MissPage"));

const RequireAuth = React.lazy(
  () => import("../components/RequireAuth/RequireAuth")
);
const AccountDetails = React.lazy(
  () => import("../components/Account/AccountDetails/AccountDetails")
);
const AccountFavorites = React.lazy(
  () => import("../components/Account/AccountFavorites/AccountFavorites")
);

export const routes: RouteObject[] = [
  {
    path: RoutesNames.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <MissPage /> },
      { path: RoutesNames.ADRESS, element: <AdressPage /> },
      {
        path: RoutesNames.COLLECTION_PAGE,
        element: <CollectionPage />,
      },
      { path: RoutesNames.PRODUCT_PAGE, element: <ProductPage /> },
      { path: RoutesNames.CART, element: <CartPage /> },

      {
        path: RoutesNames.ACCOUNT,
        element: <AccountPage />,
      },
      { path: RoutesNames.SEARCH_RESULT_PAGE, element: <SearchResultPage /> },
      { path: RoutesNames.REGISTER_PAGE, element: <RegisterPage /> },
      { path: RoutesNames.SIGN_IN_PAGE, element: <SignInPage /> },
    ],
  },
];

export const AppRouter = () => (
  <Routes>
    <Route path={RoutesNames.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={RoutesNames.ADRESS} element={<AdressPage />} />
      <Route path={RoutesNames.COLLECTION_PAGE} element={<CollectionPage />} />
      <Route path={RoutesNames.PRODUCT_PAGE} element={<ProductPage />} />
      <Route path={RoutesNames.CART} element={<CartPage />} />
      <Route
        path={RoutesNames.SEARCH_RESULT_PAGE}
        element={<SearchResultPage />}
      />
      <Route path={RoutesNames.REGISTER_PAGE} element={<RegisterPage />} />
      <Route path={RoutesNames.SIGN_IN_PAGE} element={<SignInPage />} />

      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path={RoutesNames.ACCOUNT} element={<AccountPage />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route
          path={RoutesNames.ACCOUNT_DETAILS}
          element={<AccountDetails />}
        />
      </Route>
      <Route element={<RequireAuth />}>
        <Route
          path={RoutesNames.ACCOUNT_FAVORITES}
          element={<AccountFavorites />}
        />
      </Route>
    </Route>
  </Routes>
);
