import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/atoms/Buttons/Button";
import InputTextDate from "@/components/stories/atoms/Inputs/InputTextDate";

import styles from "./DataOnboardingForm.module.scss";
import InputText from "@/components/stories/atoms/Inputs/InputText";
import { useOnboardingCtx } from "../../../context/OnboardingContext";
import DateTimeService from "@/utils/Datetime/DatetimeService";
import { DateTimeModel } from "@/utils/Datetime/DatetimeInterfaceService";
import { DATE_FORMATS } from "@/utils/Datetime/constants";

const DataOnboardingForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const onboardingCtx = useOnboardingCtx();

  const handleNext = () => {
    router.push("/sign-up/email");
  };

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    onboardingCtx.setFirstName(event.target.value);
  };

  const handleInputLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    onboardingCtx.setLastName(event.target.value);
  };

  const handleInputBirtday = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateModel: DateTimeModel = {
      date: event.target.value,
      format: DATE_FORMATS.Date,
    };
    if (DateTimeService.isValid(dateModel)) {
      onboardingCtx.setDateBirth(event.target.value);
    } else {
      onboardingCtx.setDateBirth("");
    }
  };

  const handleInputObjetive = (event: React.ChangeEvent<HTMLInputElement>) => {
    onboardingCtx.setObjetive(event.target.value);
  };

  const isDiableBtn = (): boolean => {
    return (
      !onboardingCtx.firstName ||
      !onboardingCtx.lastName ||
      !onboardingCtx.dateBirth ||
      !onboardingCtx.objetive
    );
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("welcome")}</p>
      <p className={styles.subtitle}>{t("about-yourself")}</p>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <InputText
            label={t("input-text-name-label")}
            placeholder={t("input-text-name-placeholder")}
            onChange={handleInputName}
          />
          <InputText
            label={t("input-text-lastname-label")}
            placeholder={t("input-text-lastname-placeholder")}
            onChange={handleInputLastName}
          />
          <InputTextDate
            label={t("input-text-birthday-label")}
            placeholder={t("input-text-birthday-placeholder")}
            onChange={handleInputBirtday}
          ></InputTextDate>
          <InputText
            label={t("input-select-goal-label")}
            placeholder={t("input-select-goal-placeholder")}
            onChange={handleInputObjetive}
          />
        </div>
        <div className={styles.form__button}>
          <Button label={t("btn-back")} type="button" color="secondary" />
          <Button
            label={t("btn-next")}
            type="button"
            onClick={handleNext}
            disabled={isDiableBtn()}
          />
        </div>
      </form>
    </div>
  );
};

export default DataOnboardingForm;
