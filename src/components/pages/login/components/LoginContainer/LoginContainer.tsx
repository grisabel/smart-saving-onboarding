import React from "react";
import { t } from "i18next";

import FormLogin from "./components/FormLogin";

import styles from "./LoginContainer.module.scss";

const LoginContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>{t("login now")}</p>
        <p className={styles.subtitle}>{t("better financial control")}</p>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginContainer;
