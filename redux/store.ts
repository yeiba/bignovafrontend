"use client";
import { configureStore, compose } from "@reduxjs/toolkit";

import authSlice from "./features/authSlice";
import { apiSlice } from "./services/apiSlice";
import { loadState, saveState } from "./utils/statePersistence";

// Create middleware to handle state persistence
const persistenceMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  saveState(store.getState());
  return result;
};

export const store = () => {
  const preloadedState = loadState();

  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authSlice,
    },
    // preloadedState,
    devTools: process.env.NODE_ENV !== "production",
    // Redux DevTools show in development mode and not show in production
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(apiSlice.middleware)
        .concat(persistenceMiddleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
