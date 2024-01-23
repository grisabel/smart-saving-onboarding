import Head from "next/head";
import { Inter } from "next/font/google";
//import styles from "@/styles/Login.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
      </main>
    </>
  );
}
