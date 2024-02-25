import "@/styles/globals.scss";
import "../../i18n";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getContext?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getContext = Component.getContext ?? ((page) => page);

  return getContext(<Component {...pageProps} />);
}
