import React from "react";
import styles from "@/styles/components/login/LoginContainer.module.css";
import FullLogo from "@/components/FullLogo";
import BoldText from "@/components/BoldText";
import ThinText from "@/components/ThinText";
import FormLogin from "../forms/FormLogin";

const LoginContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <FullLogo></FullLogo>
      <div>
        <BoldText text="login now" />
        <ThinText text="better financial control" />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginContainer;
