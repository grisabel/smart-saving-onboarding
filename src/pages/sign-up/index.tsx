import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import DataOnboardingDesktop from "@/components/pages/onboarding/dataOnboarding/layouts/desktop";
import DataOnboardingMobile from "@/components/pages/onboarding/dataOnboarding/layouts/mobile/DataOnboardingMobile";
import { ReactElement } from "react";
import OnboardingProvider, {
  useOnboardingCtx,
} from "@/components/pages/onboarding/context/OnboardingContext";

export default function SignUp() {
  const { email } = useOnboardingCtx();

  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      {email}
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
