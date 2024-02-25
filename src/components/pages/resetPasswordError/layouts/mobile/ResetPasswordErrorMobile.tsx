import React from "react";
import Image from "next/image";

import LayoutMobile from "@/components/stories/templates/LayoutMobile";

import styles from "./ResetPasswordErrorMobile.module.scss";
import ErrorMsg from "@/components/stories/molecules/ErrorMsg";
import DotStep from "@/components/stories/atoms/Steps/DotStep";

function ResetPasswordErrorMobile() {
  return (
    <LayoutMobile>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/images/error/error.svg"
            alt="retrievePassword"
            layout="fill"
          ></Image>
        </div>
        <ErrorMsg />
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: true },
              { isTransited: true },
              { hasError: true },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
}

export default ResetPasswordErrorMobile;
