"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { store } from "./redux";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { persistStore } from "redux-persist";
import StyledComponentsRegistry from "./registry";
import { PersistGate } from "redux-persist/integration/react";

export const persistor = persistStore(store);

export function Providers({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
}
