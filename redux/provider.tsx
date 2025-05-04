"use client";

import { store } from "./store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

interface Props {
  children: React.ReactNode;
}
// #3

export default function CustomProvider({ children }: Props) {
  const persistor = persistStore(store());
  return (
    <Provider store={store()}>
      {/* <PersistGate loading={null} persistor={persistor}>
      </PersistGate> */}
      {children}
    </Provider>
  );
}
