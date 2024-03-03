import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";

import Button from "@/components/stories/atoms/Buttons/Button";
import InputTextPassword from "@/components/stories/atoms/Inputs/InputTextPassword";

import styles from "./ResetPasswordForm.module.scss";
import { PasswordValidatorProps } from "@/components/stories/atoms/Validators/PasswordValidator/PasswordValidator.types";
import PasswordValidator from "@/components/stories/atoms/Validators/PasswordValidator";
import { PasswordFactoryRepository } from "@/repository/PasswordRepository/PasswordFactoryRepository";

const getRulePasswordLenght = (() => {
  return {
    validate: (_inputValue: string) => {
      if (!_inputValue) return null;

      const isValid = _inputValue.length >= 6;
      return isValid;
    },
  };
})();

const getRulePasswordUppercase = (() => {
  return {
    validate: (_inputValue: string) => {
      if (!_inputValue) return null;

      const isValid = /[A-Z]/.test(_inputValue);
      return isValid;
    },
  };
})();

const getRulePasswordLowercase = (() => {
  return {
    validate: (_inputValue: string) => {
      if (!_inputValue) return null;

      const isValid = /[a-z]/.test(_inputValue);
      return isValid;
    },
  };
})();

const getRulePasswordNumber = (() => {
  return {
    validate: (_inputValue: string) => {
      if (!_inputValue) return null;

      const isValid = /[0-9]/.test(_inputValue);
      return isValid;
    },
  };
})();

const getRuleSpecialChar = (() => {
  return {
    validate: (_inputValue: string) => {
      if (!_inputValue) return null;

      const isValid = /[_@#!]/.test(_inputValue);
      return isValid;
    },
  };
})();

const getRulePasswordRepeatEqual = (() => {
  return {
    validate: (data: { password: string; passwordRepeat: string }) => {
      if (!data["password"] || !data["passwordRepeat"]) return null;

      const isValid = data["password"] == data["passwordRepeat"];
      return isValid;
    },
  };
})();

const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const passwordRepository = PasswordFactoryRepository.getInstance();
  const router = useRouter();

  const searchParams = useSearchParams();
  const operationId = searchParams.get("operationId");

  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(event.target.value);
  };

  const [validation, setValidation] = useState<PasswordValidatorProps>({
    lenght: null,
    lowercase: null,
    number: null,
    specialChar: null,
    uppercase: null,
    equals: null,
  });

  useEffect(() => {
    const lenght = getRulePasswordLenght.validate(password);
    const uppercase = getRulePasswordUppercase.validate(password);
    const lowercase = getRulePasswordLowercase.validate(password);
    const number = getRulePasswordNumber.validate(password);
    const specialChar = getRuleSpecialChar.validate(password);
    const equals = getRulePasswordRepeatEqual.validate({
      password,
      passwordRepeat,
    });

    setValidation({
      uppercase,
      lowercase,
      lenght,
      number,
      specialChar,
      equals,
    });

    if (lenght && uppercase && lowercase && number && specialChar && equals) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [password, passwordRepeat]);

  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!operationId) return;

    passwordRepository
      .reset({
        password: password,
        repeatPassword: passwordRepeat,
        operationId: operationId,
      })
      .then(() => router.push("/reset-password/success"))
      .catch(() => router.push("/reset-password/error"));
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("choose-password")}</p>
      <p className={styles.subtitle}>{t("not-forget-password")}</p>
      <form className={styles.form} onSubmit={handleSumbit}>
        <div className={styles.inputs}>
          <InputTextPassword
            label={t("input-password-label")}
            placeholder={t("input-password-placeholder")}
            onChange={handlePassword}
          />
          <InputTextPassword
            label={t("input-repeat-password-label")}
            placeholder={t("input-repeat-password-placeholder")}
            onChange={handleRepeatPassword}
          />
        </div>
        <PasswordValidator {...validation} className={styles.validation} />
        <div className={styles.form__button}>
          <Button label={t("btn-next")} type="submit" disabled={disableBtn} />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
