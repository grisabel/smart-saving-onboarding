import Head from "next/head";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginLayoutDesktop from "@/components/pages/login/layouts/LoginLayoutDesktop";
import LoginLayoutMobile from "@/components/pages/login/layouts/LoginLayoutMobile";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import { LOCAL_STORAGE_KEYS } from "@/components/pages/login/components/FormLogin/FormLogin";
import { useEffect } from "react";

export default function Home() {

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
  
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<LoginLayoutDesktop />}
        mobile={<LoginLayoutMobile />}
      />
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}
