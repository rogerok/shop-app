import { combineReducers } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopServices/shopApi";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  [shopApi.reducerPath]: shopApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
