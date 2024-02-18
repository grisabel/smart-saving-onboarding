import React from "react";
import { t } from "i18next";

import styles from "./retrievePasswordContainer.module.scss";
import RetrievePasswordForm from "./components/retrievePasswordForm";

const retrievePasswordContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("forgot-your-password")}</p>
      <p className={styles.subtitle}>{t("give-your-data")}</p>
      <RetrievePasswordForm />
    </div>
  );
};

export default retrievePasswordContainer;
