import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "@/i18n";

import Button from "@/components/stories/atoms/Buttons/Button";

import styles from "./PasswordOnboardingForm.module.scss";
import InputTextPassword from "@/components/stories/atoms/Inputs/InputTextPassword";
import { UserFactoryRepository } from "@/repository/UserRepository/UserFactoryRepository";
import PasswordValidator from "@/components/stories/atoms/Validators/PasswordValidator";
import { PasswordValidatorProps } from "@/components/stories/atoms/Validators/PasswordValidator/PasswordValidator.types";
import { useOnboardingCtx } from "../../../context/OnboardingContext";

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

const userRepository = UserFactoryRepository.getInstance();

const PasswordOnboardingForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const onboardingCtx = useOnboardingCtx();

  const [password, setPassword] = useState(onboardingCtx.password);
  const [passwordRepeat, setPasswordRepeat] = useState(onboardingCtx.password);

  const [validation, setValidation] = useState<PasswordValidatorProps>({
    lenght: null,
    lowercase: null,
    number: null,
    specialChar: null,
    uppercase: null,
    equals: null,
  });

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(event.target.value);
  };

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
      onboardingCtx.setPassword(password);
    } else {
      onboardingCtx.setPassword("");
    }
  }, [password, passwordRepeat]);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    userRepository
      .register({
        dateBirth: onboardingCtx.dateBirth,
        email: onboardingCtx.email,
        repeatEmail: onboardingCtx.email,
        firstName: onboardingCtx.firstName,
        lastName: onboardingCtx.lastName,
        objetive: onboardingCtx.objetive,
        password: onboardingCtx.password,
        repeatPassword: onboardingCtx.password,
      })
      .then(() => {
        router.push("/sign-up/success");
      })
      .catch(() => {
        router.push("/sign-up/error");
      });
  };

  const handleBack = () => {
    router.push("/sign-up/email");
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("lock-account")}</p>
      <p className={styles.subtitle}>{t("secure-password")}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <InputTextPassword
            label={t("input-password-label")}
            placeholder={t("input-password-placeholder")}
            value={password}
            onChange={handlePassword}
          />
          <InputTextPassword
            label={t("input-repeat-password-label")}
            placeholder={t("input-repeat-password-placeholder")}
            value={passwordRepeat}
            onChange={handleRepeatPassword}
          />
        </div>
        <PasswordValidator
          lenght={validation.lenght}
          lowercase={validation.lowercase}
          number={validation.number}
          specialChar={validation.specialChar}
          uppercase={validation.uppercase}
          equals={validation.equals}
          className={styles.validation}
        />
        <div className={styles.form__button}>
          <Button
            label={t("btn-back")}
            type="button"
            color="secondary"
            onClick={handleBack}
          />
          <Button
            label={t("btn-next")}
            type="submit"
            disabled={!onboardingCtx.password}
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordOnboardingForm;
