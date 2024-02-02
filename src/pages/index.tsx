import Head from "next/head";
import LoginLayoutDesktop from "../components/login/LoginLayoutDesktop";
import LoginLayoutMobile from "../components/login/LoginLayoutMobile";
import styles from "@/styles/LoginPage.module.css";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.loginPage}>
        {isMobile ? <LoginLayoutMobile /> : <LoginLayoutDesktop />}
      </main>
    </>
  );
}
