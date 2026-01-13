"use client";

import { Provider, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { store, RootState } from "@/lib/store";


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
      <ThemeHandler>{children}</ThemeHandler>
    </Provider>
  );
}
