import { ReactNode } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { NextPage } from "next";

import { wrapper } from "@servises/store";

import "@styles/globals.css";
import "@styles/reset.css";

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
    <Provider store={store}>{getLayout(<Component {...props} />)}</Provider>
  );
};

export default WrappedApp;
