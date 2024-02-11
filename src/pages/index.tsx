import Head from "next/head";

import LoginPage from "@/components/pages/login/LoginPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <LoginPage />
    </>
  );
}
