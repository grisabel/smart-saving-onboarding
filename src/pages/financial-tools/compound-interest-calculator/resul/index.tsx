import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";

import DataCalculatorResultMobile from "@/components/pages/financial-tools/compound-interest-result/layouts/DataCalculatorResultMobile";
import DataCalculatorResultDesktop from "@/components/pages/financial-tools/compound-interest-result/layouts/DataCalculatorResultDesktop";
import { GetServerSideProps } from "next";
import CompountInterestProvider, { useCompountInterestCtx } from "@/components/pages/financial-tools/context/OnboardingContext";
import { ReactElement, useEffect } from "react";
import { CompountInterestResponseModel } from "@/repository/CaclculatorRepository/model/response/CompountInterestResponseModel";
import { CalculatorFactoryRepository } from "@/repository/CaclculatorRepository/UserFactoryRepository";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const calculatorRepository = CalculatorFactoryRepository.getInstance();


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, locale = 'es' } = context;

  const initialCapital = query?.["initialCapital"] as string;
  const annualContribution = query?.["annualContribution"] as string;
  const rateInterest = query?.["rateInterest"] as string;
  const period = query?.["period"] as string;

 try {
  const data = await calculatorRepository
  .compountInterest({
    initialCapital:  parseFloat(initialCapital),
    annualContribution:  parseFloat(annualContribution),
    rateInterest:  parseFloat(rateInterest),
    period:  parseFloat(period),
  })

  return {
    props: {
      data,
      ...await serverSideTranslations(locale, ['common'])
    }
  };
 } catch (error) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      data: null
    }
  }; 
 }
};

interface CompoundInterestResultProps {
 data:  CompountInterestResponseModel[] | null
}

export default function CompoundInterestResult({data}: CompoundInterestResultProps) {

  const { setData } = useCompountInterestCtx();

  useEffect(() => {
    setData(data)
  })
  
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
