import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";

import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import DataCalculatorForm from "../../components/DataCalculatorForm/DataCalculatorForm";

const DataCalculatorDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/financial-tools/compound-interest-calculator/chart-ilustration.svg",
        alt: "user-onboarding",
      }}
      step={
        <LineStep
          steps={[
            {
              isTransited: false,
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
