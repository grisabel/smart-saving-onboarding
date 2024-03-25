import React from "react";

import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./DataCalculatorMobile.module.scss";
import DataCalculatorForm from "../../components/DataCalculatorForm/DataCalculatorForm";

const DataCalculatorLayoutMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.dataOnboarding}>
        <div className={styles.content}>
          <DataCalculatorForm />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[{ isTransited: true }, { isTransited: false }]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
};

export default DataCalculatorLayoutMobile;
