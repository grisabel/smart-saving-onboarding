import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";

import DataCalculatorResultMobile from "@/components/pages/financial-tools/compound-interest-result/layouts/DataCalculatorResultMobile";
import DataCalculatorResultDesktop from "@/components/pages/financial-tools/compound-interest-result/layouts/DataCalculatorResultDesktop";
import { GetServerSideProps } from "next";
import CompountInterestProvider from "@/components/pages/financial-tools/context/OnboardingContext";
import { ReactElement } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const initialCapital = params?.["initialCapital"] as string;
  const annualContribution = params?.["annualContribution "] as string;
  const rateInterest = params?.["rateInterest"] as string;
  const period = params?.["period "] as string;

  return {
    props: {
      initialCapital: initialCapital ?  parseFloat(initialCapital) : null,
      annualContribution: annualContribution ?  parseFloat(annualContribution) : null,
      rateInterest: rateInterest ?  parseFloat(rateInterest) : null,
      period: period ?  parseFloat(period) : null,
    },
  };
};

interface CompoundInterestResultProps {
  initialCapital: number |null;
  annualContribution: number |null;
  rateInterest: number |null;
  period: number |null;
}

export default function CompoundInterestResult(props: CompoundInterestResultProps) {
  console.log({props})
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<DataCalculatorResultDesktop />}
        mobile={<DataCalculatorResultMobile />}
      />
    </>
  );
}

CompoundInterestResult.getContext = function getLayout(page: ReactElement) {
  return <CompountInterestProvider>{page}</CompountInterestProvider>; 
};
