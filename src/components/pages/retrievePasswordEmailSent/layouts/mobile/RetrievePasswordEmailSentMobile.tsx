import { t } from "i18next";
import Image from "next/image";

import LayoutMobile from "@/components/stories/templates/LayoutMobile";

import styles from "./RetrievePasswordEmailSentMobile.module.scss";

function RetrievePasswordEmailSentMobile() {
  return (
    <LayoutMobile>
      <div className={styles.text}>
        <div>
          <p className={styles.text__bold}>{`${t("sent-email")} XXXXXX`}</p>
          <p className={styles.text__thin}>{t("sent-email-success")}</p>
        </div>
        <Image
          src="/images/retrievePassword/retrivePasswordEmailSentPage.svg"
          alt="retrievePassword"
          width={320}
          height={320}
        ></Image>
        <p className={styles.text__bold}>{t("take-control")}</p>
      </div>
    </LayoutMobile>
  );
}

export default RetrievePasswordEmailSentMobile;
