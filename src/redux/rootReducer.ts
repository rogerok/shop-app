import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cartSlice";
import uiReducer from "./ui/uiSlice";
import shopReducer from "./shop/shopSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import paginationReducer from "./pagination/paginationSlice";
import { shopApi } from "../services/shopServices/shopApi";

const rootReducer = combineReducers({
  cart: cartReducer,
  [shopApi.reducerPath]: shopApi.reducer,
  ui: uiReducer,
  shop: shopReducer,
  favorite: favoriteReducer,
  pagination: paginationReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
export default rootReducer;
