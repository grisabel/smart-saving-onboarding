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
        <div className={styles.stepts}>{props.step}</div>
        <div className={styles.forms}>{props.form}</div>
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
