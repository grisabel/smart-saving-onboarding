import styles from "./EmailSendtSucess.module.scss";
import { t } from "i18next";

const EmailSentSuccess: React.FC = () => {
  return (
    <div className={styles.text}>
      <div>
        <p className={styles.text__bold}>{`${t("sent-email")} XXXXXX`}</p>
        <p className={styles.text__thin}>{t("sent-email-success")}</p>
      </div>
      <p className={styles.text__bold}>{t("take-control")}</p>
    </div>
  );
};

export default EmailSentSuccess;
