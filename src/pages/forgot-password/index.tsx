import { ReactElement } from "react";
import Head from "next/head";

import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import RetrievePasswordLayoutDesktop from "@/components/pages/forgotPassword/forgotPassword/layouts/RetrievePasswordLayoutDesktop";
import RetrievePasswordLayoutMobile from "@/components/pages/forgotPassword/forgotPassword/layouts/RetrievePasswordLayoutMobile";
import ForgotPasswordProvider from "@/components/pages/forgotPassword/context/ForgotPasswordContext";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<RetrievePasswordLayoutDesktop />}
        mobile={<RetrievePasswordLayoutMobile />}
      />
    </>
  );
}

ForgotPassword.getContext = function getLayout(page: ReactElement) {
  return <ForgotPasswordProvider>{page}</ForgotPasswordProvider>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}