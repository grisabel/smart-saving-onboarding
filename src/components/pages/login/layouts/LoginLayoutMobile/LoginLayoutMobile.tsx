import styles from "./LoginLayoutMobile.module.scss";

import React from "react";
import { useTranslation } from "react-i18next";

import LoginContainer from "../../components/LoginContainer";
import Button from "@/components/stories/atoms/Buttons/Button";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LayoutMobile>
      <div className={styles.loginLayoutMobile}>
        <LoginContainer />
        <hr />
        <Button label={t("registerButtonLabel")} color="secondary" />
      </div>
    </LayoutMobile>
  );
};

export default LoginLayoutMobile;
