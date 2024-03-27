import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";

import DataCalculatorDesktop from "@/components/pages/financial-tools/compound-interest-calculator/layouts/DataCalculatorDesktop";
import DataCalculatorMobile from "@/components/pages/financial-tools/compound-interest-calculator/layouts/DataCalculatorMobile";

export default function SignUp() {
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
