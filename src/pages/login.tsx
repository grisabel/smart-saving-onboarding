import Head from "next/head";

import LoginLayoutDesktop from "@/components/pages/login/layouts/LoginLayoutDesktop";
import LoginLayoutMobile from "@/components/pages/login/layouts/LoginLayoutMobile";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";

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
        desktop={<LoginLayoutDesktop />}
        mobile={<LoginLayoutMobile />}
      />
    </>
  );
}

