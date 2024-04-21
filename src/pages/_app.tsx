import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import { useEffect } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getContext?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {  

  useEffect(()=> {
    const lng = window.localStorage.getItem('language') ?? 'es';
    console.log({lng})
  }, [])
  
  const getContext = Component.getContext ?? ((page) => page);

  return getContext(<Component {...pageProps} />);
}
