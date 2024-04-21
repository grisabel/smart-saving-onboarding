import { useTranslation } from "@/i18n";
import styles from "./EmailSentSucess.module.scss";
import { useForgotPasswordCtx } from "../../../../../context/ForgotPasswordContext";

const EmailSentSuccess: React.FC = () => {
  const { t } = useTranslation();
  const forgotPasswordCtx = useForgotPasswordCtx();
  console.log(forgotPasswordCtx.email);
  return (
    <div className={styles.text}>
      <div>
        <p className={styles.text__bold}>{`${t("sent-email")} ${
          forgotPasswordCtx.email
        }`}</p>
        <p className={styles.text__thin}>{t("sent-email-success")}</p>
      </div>
      <p className={styles.text__bold}>{t("take-control")}</p>
    </div>
  );
};

export default EmailSentSuccess;
