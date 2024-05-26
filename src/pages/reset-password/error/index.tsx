import Head from "next/head";

import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import ResetPasswordErrorDesktop from "@/components/pages/resetPassword/resetPasswordError/layouts/desktop";
import ResetPasswordErrorMobile from "@/components/pages/resetPassword/resetPasswordError/layouts/mobile";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ResetPasswordError() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<ResetPasswordErrorDesktop />}
        mobile={<ResetPasswordErrorMobile />}
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
