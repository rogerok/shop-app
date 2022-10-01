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
// eslint-disable-next-line import/no-cycle
import { authApi } from "../services/authApi";

// eslint-disable-next-line import/no-cycle
import { userApi } from "../services/userApi";
import { shopApi } from "../services/shopApi";
import { personalSafetyApi } from "../services/personalSafetyApi";
// eslint-disable-next-line import/no-cycle
import { persistedReducer } from "./rootReducer";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gettDefaultMiddelware) =>
    gettDefaultMiddelware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      logger,
      shopApi.middleware,
      authApi.middleware,
      userApi.middleware,
      personalSafetyApi.middleware,
    ]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
