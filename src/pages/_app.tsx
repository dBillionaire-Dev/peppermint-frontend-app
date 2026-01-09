import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nezer Peppermint Assessment</title>
        <link rel="shortcut icon" href="/assets/logo-purple.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
