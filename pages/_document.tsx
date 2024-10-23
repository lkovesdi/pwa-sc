import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // Please do not add lang="", next-i18next will handle this for you.
    <Html dir="ltr">
      <Head>
        <style>{`
            html, body, #__next {
              height: 100%;
              background-color: #000;
              background-image: url('/backgroundGradient@4x.png');
              background-size: cover;
              background-position: center;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
