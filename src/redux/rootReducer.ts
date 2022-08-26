import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// eslint-disable-next-line import/no-cycle
import { userApi } from "../services/userApi";
import { authApi } from "../services/authApi";

import cartReducer from "./cart/cartSlice";
import uiReducer from "./ui/uiSlice";
import shopReducer from "./shop/shopSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import paginationReducer from "./pagination/paginationSlice";
import userReducer from "./user/userSlice";
import { shopApi } from "../services/shopApi";

const rootReducer = combineReducers({
  cart: cartReducer,
  [shopApi.reducerPath]: shopApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  ui: uiReducer,
  shop: shopReducer,
  favorite: favoriteReducer,
  pagination: paginationReducer,
  user: userReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
export default rootReducer;
