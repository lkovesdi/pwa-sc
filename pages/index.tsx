import type { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import type { ServerSideTranslations } from "../shared/types";

export default function Index() {
  const { t } = useTranslation("common");
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Head>
        <title>SocialCrowd</title>
      </Head>
      <img
        src="/icons/SocialCrowdIcon_new.png"
        alt="SocialCrowd"
        className="mx-auto"
        style={{ width: "100px", height: "100px", alignItems: "center" }}
      />
    </div>
  );
}

type GSPProps = ServerSideTranslations;

export const getStaticProps: GetStaticProps<GSPProps> = async ({ locale }) => {
  return {
    props: {
      // replace "en" with your preferred default language.
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
