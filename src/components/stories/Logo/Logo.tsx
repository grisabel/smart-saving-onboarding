import React from "react";
import Image from "next/image";
import styles from "./Logo.module.css";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.ico" width={150} height={80} alt="Logo Icon" />
      <div className={styles.logoTitle}>
        <p className={styles.titleBold}>SMART</p>
        <p className={styles.titleThin}>SAVINGS</p>
      </div>
    </div>
  );
};

export default Logo;
