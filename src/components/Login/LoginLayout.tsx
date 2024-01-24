import React, { ReactNode } from "react";
import styles from "@/styles/Login.module.css";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default LoginLayout;
