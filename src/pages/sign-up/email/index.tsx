import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import EmailOnboardingDesktop from "@/components/pages/onboarding/emailOnboarding/layouts/desktop";
import EmailOnboardingMobile from "@/components/pages/onboarding/emailOnboarding/layouts/mobile";
import OnboardingProvider from "@/components/pages/onboarding/context/OnboardingContext";
import { ReactElement } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Email() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<EmailOnboardingDesktop />}
        mobile={<EmailOnboardingMobile />}
      />
    </>
  );
}

Email.getContext = function getLayout(page: ReactElement) {
  return <OnboardingProvider>{page}</OnboardingProvider>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}
