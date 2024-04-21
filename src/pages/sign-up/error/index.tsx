import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import ErrorOnboardingDesktop from "@/components/pages/onboarding/error/layouts/desktop";
import ErrorOnboardingMobile from "@/components/pages/onboarding/error/layouts/mobile";
import OnboardingProvider from "@/components/pages/onboarding/context/OnboardingContext";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Error() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<ErrorOnboardingDesktop />}
        mobile={<ErrorOnboardingMobile />}
      />
    </>
  );
}

Error.getContext = function getLayout(page: React.ReactElement) {
  return <OnboardingProvider>{page}</OnboardingProvider>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}
