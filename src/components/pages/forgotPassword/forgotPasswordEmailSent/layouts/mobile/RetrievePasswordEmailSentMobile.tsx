import Image from "next/image";

import LayoutMobile from "@/components/stories/templates/LayoutMobile";

import styles from "./RetrievePasswordEmailSentMobile.module.scss";
import { useTranslation } from 'next-i18next';

function RetrievePasswordEmailSentMobile() {

  const {t} = useTranslation('common');

  return (
    <LayoutMobile>
      <div className={styles.text}>
        <div>
          <p className={styles.text__bold}>{`${t("sent-email")} XXXXXX`}</p>
          <p className={styles.text__thin}>{t("sent-email-success")}</p>
        </div>
        <Image
          src="/login/images/retrievePassword/retrivePasswordEmailSentPage.svg"
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
