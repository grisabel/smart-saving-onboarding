import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";

import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import DataCalculatorForm from "../../components/DataCalculatorForm/DataCalculatorForm";

import styles from "./DataCaclculatorDesktop.module.scss"

const DataCalculatorDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/financial-tools/compound-interest-calculator/chart-ilustration.svg",
        alt: "user-onboarding",
      }}
      step={
        <LineStep
        className={styles.LineStepCalculator}
          steps={[
            {
              isTransited: true,
              icon: <Icon name="form" />,
              isCompleted: true,
            },
            { isTransited: false, icon: <Icon name="chart" /> },
          ]}
        ></LineStep>
      }
      form={<DataCalculatorForm />}
    />
  );
};

export default DataCalculatorDesktop;
