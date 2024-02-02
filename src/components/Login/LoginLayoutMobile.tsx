import React, { ReactNode } from "react";
import styles from "@/styles/components/login/LoginLayout.module.css";
import FullLogo from "../FullLogo";
import BoldText from "../BoldText";
import ThinText from "../ThinText";
import BlueButton from "../BlueButton";
import GreyButton from "../GreyButton";

const LoginLayoutMobile: React.FC = () => {
  return (
    <div className={styles.container}>
      <FullLogo></FullLogo>
      <div>
        <BoldText text="login now"></BoldText>
        <ThinText text="better financial control"></ThinText>
        <BlueButton label="loginButtonLabel" />
        <GreyButton label="registerButtonLabel" />
      </div>
    </div>
  );
};

export default LoginLayoutMobile;
