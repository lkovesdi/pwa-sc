import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";

const APP_NAME = "SocialCrowd";
const APP_DESCRIPTION = "SocialCrowd";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1; viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/SocialCrowdIcon_new.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000" />
        <link rel="icon" sizes="192x192" href="/icons/SocialCrowdIcon_new.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
