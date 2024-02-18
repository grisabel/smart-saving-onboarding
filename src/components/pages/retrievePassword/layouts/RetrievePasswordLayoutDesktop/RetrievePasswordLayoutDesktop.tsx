import React from "react";
import Image from "next/image";

import styles from "./RetrievePasswordLayoutDesktop.module.scss";
import Logo from "@/components/stories/Logo";
import RetrievePasswordContainer from "../../components/retrievePasswordContainer/retrievePasswordContainer";

const RetrievePasswordLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.retrievePassword}>
        <div className={styles.stepts}></div>
        <RetrievePasswordContainer />
        <div className={styles.image}>
          <Image
            src="/images/retrievePassword/retrievePassword_1.svg"
            alt="retrievePassword"
            layout="fill"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default RetrievePasswordLayoutDesktop;
