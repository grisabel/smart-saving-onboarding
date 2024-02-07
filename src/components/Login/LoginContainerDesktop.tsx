import React from "react";
import styles from "@/styles/components/login/LoginContainer.module.css";
import BlueButton from "@/components/BlueButton";
import FullLogo from "@/components/FullLogo";
import BoldText from "@/components/BoldText";
import ThinText from "@/components/ThinText";
import ForgotPassword from "./ForgotPassword";

const LoginContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <FullLogo></FullLogo>
      <div>
        <BoldText text="login now"></BoldText>
        <ThinText text="better financial control"></ThinText>
        <ForgotPassword label="forgotPassword" />
        <BlueButton label="loginButtonLabel" />
      </div>
    </div>
  );
};

export default LoginContainer;
