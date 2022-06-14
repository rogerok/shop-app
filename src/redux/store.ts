import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { shopApi } from "../services/shopServices/shopApi";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gettDefaultMiddelware) =>
    gettDefaultMiddelware().concat([logger, shopApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
