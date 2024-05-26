import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";

import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import DataOnboardingForm from "../../components/DataOnboardingForm";

const DataOnboardingDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/onboarding/user.svg",
        alt: "user-onboarding",
      }}
      step={
        <LineStep
          steps={[
            { icon: <Icon name="user" />, isCompleted: true },
            { isTransited: false, icon: <Icon name="email" /> },
            { isTransited: false, icon: <Icon name="lock" /> },
            { isTransited: false, icon: <Icon name="flag" /> },
          ]}
        ></LineStep>
      }
      form={<DataOnboardingForm />}
    />
  );
};

export default DataOnboardingDesktop;
