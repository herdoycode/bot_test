import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
