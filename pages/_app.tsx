import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationBar />
        <Banner />
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
