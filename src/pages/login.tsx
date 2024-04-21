import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginLayoutDesktop from "@/components/pages/login/layouts/LoginLayoutDesktop";
import LoginLayoutMobile from "@/components/pages/login/layouts/LoginLayoutMobile";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import { GetStaticProps } from "next";

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



export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations('en', ['common'])
    },
  };
}
