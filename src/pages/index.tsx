import Head from "next/head";
import LoginLayout from "../components/Login/LoginLayout";
import styles from "@/styles/LoginPage.module.css";
import BlueButton from "@/components/BlueButton";
import FullLogo from "@/components/FullLogo";
import BoldText from "@/components/BoldText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.loginLayout}>
        <LoginLayout>
          <BlueButton label="loginButtonLabel" />
          <FullLogo></FullLogo>
          <BoldText text="login now"></BoldText>
        </LoginLayout>
      </main>
    </>
  );
}
