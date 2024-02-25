import { useTranslation } from "react-i18next";
import Image from "next/image";

import Button from "@/components/stories/atoms/Buttons/Button";
import styles from "./Success.module.scss";

const Success: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.text}>
      <div>
        <p className={styles.text__bold}>{t("congratulation")}</p>
        <p className={styles.text__thin}>{t("onboarding-completed")}</p>
      </div>
      <Image
        src="/images/retrievePassword/retrivePasswordEmailSentPage.svg"
        alt="retrievePassword"
        width={320}
        height={320}
      ></Image>
      <p className={styles.text__bold}>{t("login-now")}</p>
      <Button label={t("loginButtonLabel")}></Button>
    </div>
  );
};

export default Success;
