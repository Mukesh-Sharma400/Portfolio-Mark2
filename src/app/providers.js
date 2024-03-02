"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { store } from "./redux";
import { Provider } from "react-redux";
import Theme from "./components/Theme";
import { persistStore } from "redux-persist";
import StyledComponentsRegistry from "./registry";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";

export const persistor = persistStore(store);

export function Providers({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <StyledComponentsRegistry>
          <Theme>{children}</Theme>
        </StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
}
