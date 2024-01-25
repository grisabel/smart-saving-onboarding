import Head from "next/head";
import LoginLayout from "../components/Login/LoginLayout";
import styles from "@/styles/LoginPage.module.css";
import BlueButton from "@/components/BlueButton";

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
        </LoginLayout>
      </main>
    </>
  );
}
