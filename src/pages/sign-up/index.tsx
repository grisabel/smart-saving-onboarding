import Head from "next/head";
import { GetServerSideProps } from "next";

import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import DataOnboardingDesktop from "@/components/pages/onboarding/dataOnboarding/layouts/desktop";
import DataOnboardingMobile from "@/components/pages/onboarding/dataOnboarding/layouts/mobile/DataOnboardingMobile";
import { ReactElement } from "react";
import OnboardingProvider from "@/components/pages/onboarding/context/OnboardingContext";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<DataOnboardingDesktop />}
        mobile={<DataOnboardingMobile />}
      />
    </>
  );
}

SignUp.getContext = function getLayout(page: ReactElement) {
  return <OnboardingProvider>{page}</OnboardingProvider>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}
