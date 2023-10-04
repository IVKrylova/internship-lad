import { ReactNode } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";

import { wrapper } from "@servises/store";

import "@styles/reset.css";
import "@styles/globals.css";

type TPage<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type TProps = AppProps & {
  Component: TPage;
};

const WrappedApp = ({ Component, ...pageProps }: TProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <Provider store={store}>
      <Head>
        <title>EgyptTour</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="icon" href="icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta
          name="description"
          content="Приложение для отбора на стажировку в Lad"
        />
      </Head>
      {getLayout(<Component {...props} />)}
    </Provider>
  );
};

export default WrappedApp;
