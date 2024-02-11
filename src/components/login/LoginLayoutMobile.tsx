import React, { ReactNode } from "react";
import styles from "@/styles/components/login/LoginLayout.module.css";
import FullLogo from "../FullLogo";
import BoldText from "../BoldText";
import ThinText from "../ThinText";
import BlueButton from "@/components/stories/Button/BlueButton";
import GreyButton from "@/components/stories/Button/GreyButton/GreyButton";
import { useTranslation } from "react-i18next";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <FullLogo></FullLogo>
      <div>
        <BoldText text="login now"></BoldText>
        <ThinText text="better financial control"></ThinText>
        <BlueButton label={t("loginButtonLabel")} />
        <GreyButton label={t("registerButtonLabel")} />
      </div>
    </div>
  );
};

export default LoginLayoutMobile;
