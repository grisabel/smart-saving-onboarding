import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";

import DataCalculatorDesktop from "@/components/pages/financial-tools/compound-interest-calculator/layouts/DataCalculatorDesktop";
import DataCalculatorMobile from "@/components/pages/financial-tools/compound-interest-calculator/layouts/DataCalculatorMobile";
import { ReactElement } from "react";
import CompountInterestProvider from "@/components/pages/financial-tools/context/OnboardingContext";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CompoundInterestForm() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<DataCalculatorDesktop />}
        mobile={<DataCalculatorMobile />}
      />
    </>
  );
}


CompoundInterestForm.getContext = function getLayout(page: ReactElement) {
  return <CompountInterestProvider>{page}</CompountInterestProvider>; 
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}