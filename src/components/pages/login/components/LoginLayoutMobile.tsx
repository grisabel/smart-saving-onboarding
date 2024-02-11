import styles from "./LoginLayoutMobile.module.scss";

import React from "react";
import { useTranslation } from "react-i18next";

import LoginContainer from "./LoginContainer";
import Button from "@/components/stories/Buttons/Button";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.loginLayoutMobile}>
      <LoginContainer />
      <hr />
      <Button label={t("registerButtonLabel")} color="secondary" />
    </div>
  );
};

export default LoginLayoutMobile;
