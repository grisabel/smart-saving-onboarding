import React from "react";
import Image from "next/image";

import styles from "./LayoutStepDesktop.module.scss";
import Logo from "@/components/stories/atoms/Logo";
// import RetrievePasswordContainer from "../../components/retrievePasswordContainer/retrievePasswordContainer";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import { LayoutStepDesktopProps } from "./LayoutStepDesktop.type";

const LayoutStepDesktop: React.FC<LayoutStepDesktopProps> = (props) => {
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
        <h1>ghdfoñjgx</h1>
        {/* <RetrievePasswordContainer /> */}
        <div className={styles.image}>
          <Image
            src={props.image.src}
            alt={props.image.alt}
            layout="fill"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default LayoutStepDesktop;
