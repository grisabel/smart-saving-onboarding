import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";

import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import DataOnboardingForm from "../../components/DataOnboardingForm";

const EmailOnboardingDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/onboarding/postal.svg",
        alt: "postal-onboarding",
      }}
      step={
        <LineStep
          steps={[
            { icon: <Icon name="user" />, isCompleted: true },
            { icon: <Icon name="email" />, isCompleted: true },
            { isTransited: false, icon: <Icon name="lock" /> },
            { isTransited: false, icon: <Icon name="flag" /> },
          ]}
        ></LineStep>
      }
      form={<DataOnboardingForm />}
    />
  );
};

export default EmailOnboardingDesktop;
