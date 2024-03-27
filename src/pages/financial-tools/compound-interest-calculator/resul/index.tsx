import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";

import DataCalculatorResultMobile from "@/components/pages/financial-tools/compound-interest-result/layouts/DataCalculatorResultMobile";
import DataCalculatorResultDesktop from "@/components/pages/financial-tools/compound-interest-result/layouts/DataCalculatorResultDesktop";

export default function CompoundInterestResult() {
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
