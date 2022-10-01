import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { personalSafetyApi } from "../services/personalSafetyApi";
// eslint-disable-next-line import/no-cycle
import { userApi } from "../services/userApi";
// eslint-disable-next-line import/no-cycle
import { authApi } from "../services/authApi";
import { shopApi } from "../services/shopApi";

import cartReducer from "./cart/cartSlice";
import uiReducer from "./ui/uiSlice";
import paginationReducer from "./pagination/paginationSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  [shopApi.reducerPath]: shopApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [personalSafetyApi.reducerPath]: personalSafetyApi.reducer,
  ui: uiReducer,
  pagination: paginationReducer,
  user: userReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
export default rootReducer;
