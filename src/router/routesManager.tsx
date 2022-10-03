import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

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
const Dashboard = React.lazy(
  () => import("../components/Account/Dashboard/Dashboard")
);
const AccountDetails = React.lazy(
  () => import("../components/Account/AccountDetails/AccountDetails")
);
const AccountFavorites = React.lazy(
  () => import("../components/Account/AccountFavorites/AccountFavorites")
);

const AccountOrders = React.lazy(
  () => import("../components/Account/AccountOrders/AccountOrders")
);

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
        <Route path={`${RoutesNames.ACCOUNT_PAGE}/*`} element={<AccountPage />}>
          <Route path={RoutesNames.ACCOUNT_DASHBOARD} element={<Dashboard />} />
          <Route
            path={RoutesNames.ACCOUNT_FAVORITES}
            element={<AccountFavorites />}
          />
          <Route
            path={RoutesNames.ACCOUNT_DETAILS}
            element={<AccountDetails />}
          />
          <Route
            path={RoutesNames.ACCOUNT_ORDERS}
            element={<AccountOrders />}
          />
        </Route>
      </Route>
      <Route element={<RequireAuth />} />
      <Route element={<RequireAuth />} />
    </Route>
  </Routes>
);
