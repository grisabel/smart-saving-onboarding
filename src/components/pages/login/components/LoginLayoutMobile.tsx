import React, { ReactNode } from "react";
import styles from "@/styles/components/login/LoginLayout.module.css";
import Logo from "../../../stories/Logo";
import BoldText from "../../../BoldText";
import ThinText from "../../../ThinText";

import Button from "@/components/stories/Buttons/Button";

import { useTranslation } from "react-i18next";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Logo></Logo>
      <div>
        <BoldText text="login now"></BoldText>
        <ThinText text="better financial control"></ThinText>
        <Button label={t("loginButtonLabel")} />
        <Button label={t("registerButtonLabel")} color="secondary" />
      </div>
    </div>
  );
};

export default LoginLayoutMobile;
