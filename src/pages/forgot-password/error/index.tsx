import Head from "next/head";

import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import RetrievePasswordErrorDesktop from "@/components/pages/forgotPassword/forgotPasswordError/layouts/desktop";
import RetrievePasswordErrorMobile from "@/components/pages/forgotPassword/forgotPasswordError/layouts/mobile";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ForgotPasswordError() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<RetrievePasswordErrorDesktop />}
        mobile={<RetrievePasswordErrorMobile />}
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