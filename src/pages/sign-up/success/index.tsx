import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import SuccessOnboardingDesktop from "@/components/pages/onboarding/success/layouts/desktop";
import SuccessOnboardingMobile from "@/components/pages/onboarding/success/layouts/mobile";
import OnboardingProvider from "@/components/pages/onboarding/context/OnboardingContext";

export default function Success() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<SuccessOnboardingDesktop />}
        mobile={<SuccessOnboardingMobile />}
      />
    </>
  );
}

Success.getContext = function getLayout(page: React.ReactElement) {
  return <OnboardingProvider>{page}</OnboardingProvider>;
};
