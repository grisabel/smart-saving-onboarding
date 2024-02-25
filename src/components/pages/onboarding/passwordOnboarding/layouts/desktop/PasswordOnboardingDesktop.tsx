import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";

import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import PasswordOnboardingForm from "../../components/PasswordOnboardingForm";

const PasswordOnboardingDesktop: React.FC = () => {
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
            { icon: <Icon name="lock" />, isCompleted: true },
            { isTransited: false, icon: <Icon name="flag" /> },
          ]}
        ></LineStep>
      }
      form={<PasswordOnboardingForm />}
    />
  );
};

export default PasswordOnboardingDesktop;
