import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import { authApi } from "../services/authApi";

import { shopApi } from "../services/shopApi";
import { persistedReducer } from "./rootReducer";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gettDefaultMiddelware) =>
    gettDefaultMiddelware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([logger, shopApi.middleware, authApi.middleware]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
