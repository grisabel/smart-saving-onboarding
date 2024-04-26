import { LOCAL_STORAGE_KEYS } from "@/components/pages/login/components/FormLogin/FormLogin";
import "@/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import { useEffect } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getContext?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const refreshToken = window.localStorage.getItem(
      LOCAL_STORAGE_KEYS.refreshToken
    );
    const accessToken = window.localStorage.getItem(
      LOCAL_STORAGE_KEYS.accessToken
    );

    if (accessToken && refreshToken) {
      const urlToGo = (process.env.NEXT_PUBLIC_APP_URL ?? "")
        .replace(":accessToken", accessToken)
        .replace(":refreshToken", refreshToken);

      document.location.href = urlToGo;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "language",
      pageProps?._nextI18Next?.initialLocale ?? "es"
    );
  }, [pageProps?._nextI18Next?.initialLocale]);

  const getContext = Component.getContext ?? ((page) => page);

  return getContext(<Component {...pageProps} />);
}

export default appWithTranslation(App);
