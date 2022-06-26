import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// eslint-disable-next-line import/no-cycle
import cartReducer from "./cart/cartSlice";
import sidebarReducer from "./sidebar/sidebarSlice";
import { shopApi } from "../services/shopServices/shopApi";

const rootReducer = combineReducers({
  cart: cartReducer,
  [shopApi.reducerPath]: shopApi.reducer,
  sidebar: sidebarReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
export default rootReducer;
