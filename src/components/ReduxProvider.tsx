"use client";

import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, RootState } from "@/lib/store";

const ThemeHandler = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
};

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeHandler>{children}</ThemeHandler>
      </PersistGate>
    </Provider>
  );
}
