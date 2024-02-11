import React from "react";
import styles from "./LoginLayoutDesktop.module.scss";
import LoginContainerDesktop from "./LoginContainerDesktop";

const LoginLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.loginLayout}>
      <LoginContainerDesktop></LoginContainerDesktop>
    </div>
  );
};

export default LoginLayoutDesktop;
