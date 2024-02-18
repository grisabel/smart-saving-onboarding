import React from "react";
import Image from "next/image";

import styles from "./RetrievePasswordLayoutDesktop.module.scss";
import Logo from "@/components/stories/atoms/Logo";
import RetrievePasswordContainer from "../../components/retrievePasswordContainer/retrievePasswordContainer";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";

const RetrievePasswordLayoutDesktop: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.retrievePassword}>
        <div className={styles.stepts}>
          <LineStep
            steps={[
              { icon: <Icon name="question" />, isCompleted: true },
              { isTransited: false, icon: <Icon name="email-send" /> },
              { isTransited: false, icon: <Icon name="lock" /> },
            ]}
          ></LineStep>
        </div>
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
