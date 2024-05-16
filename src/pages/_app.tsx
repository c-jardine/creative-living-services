import { RootLayout } from "@/layouts/RootLayout";
import store, { persistor } from "@/store";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
