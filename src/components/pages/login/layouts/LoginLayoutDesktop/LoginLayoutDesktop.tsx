import React from "react";
import styles from "./LoginLayoutDesktop.module.scss";

import LoginContainer from "../../components/LoginContainer";
import SignupContainer from "../../components/SignupContainer";
import Logo from "@/components/stories/atoms/Logo";

const LoginLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.loginLayout}>
      <div className={styles.main}>
        <Logo />
        <LoginContainer />
      </div>
      <SignupContainer />
    </div>
  );
};

export default LoginLayoutDesktop;
