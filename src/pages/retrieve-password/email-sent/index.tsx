import Head from "next/head";

import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import RetrievePasswordEmailSentDesktop from "@/components/pages/resetPassword2/forgotPasswordEmailSent/layouts/desktop";
import RetrievePasswordEmailSentMobile from "@/components/pages/resetPassword2/forgotPasswordEmailSent/layouts/mobile/RetrievePasswordEmailSentMobile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<RetrievePasswordEmailSentDesktop />}
        mobile={<RetrievePasswordEmailSentMobile />}
      />
    </>
  );
}
