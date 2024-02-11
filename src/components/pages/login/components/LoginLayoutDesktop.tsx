import React from "react";
import styles from "./LoginLayoutDesktop.module.scss";

import LoginContainer from "./LoginContainer";

const LoginLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.loginLayout}>
      <LoginContainer />
    </div>
  );
};

export default LoginLayoutDesktop;
