import React from "react";
import { t } from "i18next";

import Logo from "@/components/stories/Logo";
import FormLogin from "./components/FormLogin/FormLogin";

import styles from "./LoginContainer.module.scss";

const LoginContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo width={150} height={80}></Logo>
      <div>
        <p className={styles.title}>{t("login now")}</p>
        <p className={styles.subtitle}>{t("better financial control")}</p>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginContainer;
