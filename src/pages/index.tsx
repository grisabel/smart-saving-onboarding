import Head from "next/head";
import LoginLayout from "../components/Login/LoginLayout";
import styles from "@/styles/Login.module.css";

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
        {/* <LoginLayout>
          <div>Login</div>
          <div>foto</div>
        </LoginLayout> */}
      </main>
    </>
  );
}
