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
        <ErrorMsg />
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: false },
              { isTransited: false },
              { hasError: true },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
}

export default ResetPasswordErrorMobile;
