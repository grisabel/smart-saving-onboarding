import React from "react";
import { useTranslation } from "react-i18next";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import ErrorMsg from "@/components/stories/molecules/ErrorMsg";

const ErrorOnboardingDesktop: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/error/error.svg",
        alt: "error",
      }}
      step={
        <LineStep
          steps={[
            { icon: <Icon name="user" />, isCompleted: true },
            { icon: <Icon name="email" />, isCompleted: true },
            { icon: <Icon name="lock" />, isCompleted: true },
            { icon: <Icon name="flag" />, hasError: true },
          ]}
        ></LineStep>
      }
      form={<ErrorMsg />}
    />
  );
};

export default ErrorOnboardingDesktop;
