import React from "react";
import styles from "./LoginLayoutDesktop.module.scss";

import SignupContainer from "../../components/SignupContainer";
import FormLogin from "../../components/FormLogin";
import Logo from "@/components/stories/atoms/Logo";

const LoginLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.loginLayout}>
      <div className={styles.main}>
        <Logo />
        <FormLogin />
      </div>
      <SignupContainer />
    </div>
  );
};

export default LoginLayoutDesktop;
