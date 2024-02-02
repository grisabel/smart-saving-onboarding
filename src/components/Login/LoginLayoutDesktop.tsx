import React, { ReactNode } from "react";
import styles from "@/styles/components/login/LoginLayout.module.css";
import LoginContainerDesktop from "./LoginContainerDesktop";

const LoginLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.loginLayout}>
      <LoginContainerDesktop></LoginContainerDesktop>
    </div>
  );
};

export default LoginLayoutDesktop;
