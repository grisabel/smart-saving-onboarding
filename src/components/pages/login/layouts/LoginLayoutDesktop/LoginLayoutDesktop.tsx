import React from "react";
import styles from "./LoginLayoutDesktop.module.scss";

import LoginContainer from "../../components/LoginContainer";
import SignupContainer from "../../components/SignupContainer";

const LoginLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.loginLayout}>
      <LoginContainer />
      <SignupContainer />
    </div>
  );
};

export default LoginLayoutDesktop;
