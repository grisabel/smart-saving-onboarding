import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import PasswordOnboardingDesktop from "@/components/pages/onboarding/passwordOnboarding/layouts/desktop";
import PasswordOnboardingMobile from "@/components/pages/onboarding/passwordOnboarding/layouts/mobile";
import OnboardingProvider from "@/components/pages/onboarding/context/OnboardingContext";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Password() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<PasswordOnboardingDesktop />}
        mobile={<PasswordOnboardingMobile />}
      />
    </>
  );
}

Password.getContext = function getLayout(page: React.ReactElement) {
  return <OnboardingProvider>{page}</OnboardingProvider>;
};


export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}