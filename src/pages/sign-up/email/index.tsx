import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import EmailOnboardingDesktop from "@/components/pages/onboarding/emailOnboarding/layouts/desktop";
import EmailOnboardingMobile from "@/components/pages/onboarding/emailOnboarding/layouts/mobile";
import OnboardingProvider, {
  useOnboardingCtx,
} from "@/components/pages/onboarding/context/OnboardingContext";
import { ReactElement } from "react";

export default function Email() {
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
        desktop={<EmailOnboardingDesktop />}
        mobile={<EmailOnboardingMobile />}
      />
    </>
  );
}

Email.getContext = function getLayout(page: ReactElement) {
  return <OnboardingProvider>{page}</OnboardingProvider>;
};
