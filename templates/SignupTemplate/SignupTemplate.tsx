import { FC, FormEvent, useState, useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";

import {
  H1,
  ButtonCta,
  Input,
  InputPassword,
  ErrorMessage,
  ButtonGoBack,
} from "@components";
import { useFormAndValidation } from "@hooks";
import { signup, login } from "@api";
import { TError, TUser } from "@types";

import style from "./SignupTemplate.module.scss";

export const SignupTemplate: FC = () => {
  const router: NextRouter = useRouter();
  const { isValid, errors, values, handleChange, setIsValid } =
    useFormAndValidation();

  const [isActiveButton, setIsActiveButton] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsActiveButton(false);
    setMessage("");

    const res: TUser | TError = await signup(values.email, values.password);
    if (res && "token" in res) {
      setIsActiveButton(true);
      const token: string | TError = await login(values.email, values.password);
      if (token && typeof token === "string") {
        localStorage.setItem("token", token);
        router.push("/account");
      } else {
        setMessage("An error has occurred");
      }
    } else {
      setIsActiveButton(true);
      setMessage("An error has occurred");
    }
  };

  useEffect(() => {
    isValid ? setIsActiveButton(true) : setIsActiveButton(false);
  }, [isValid]);

  useEffect(() => {
    if (values.password !== values.repeatPassword) {
      setIsValid(false);
      setErrorPassword(`Passwords don't match`);
    } else if (
      !errors.email &&
      errors.password &&
      errors.repeatPassword &&
      values.password &&
      values.repeatPassword
    ) {
      setIsValid(true);
      setErrorPassword("");
    } else {
      setErrorPassword("");
    }
  }, [values.email, values.password, values.repeatPassword]);

  return (
    <>
      <ButtonGoBack />
      <H1 title="Registration" className={style.h1} />
      <p className={style.textLink}>
        <span>{`Do you have an account? `}</span>
        <Link className={style.link} href="/login">
          Log in!
        </Link>
      </p>
      {message && <ErrorMessage message={message} />}
      <form className={style.form} noValidate onSubmit={handleFormSubmit}>
        <Input
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          error={errors.email}
          value={values.email}
          isValid={isValid}
          required={true}
        />
        <InputPassword
          label="Password"
          handleChange={handleChange}
          error={errors.password}
          value={values.password}
          isValid={isValid}
          name="password"
        />
        <InputPassword
          label="Repeat password"
          handleChange={handleChange}
          error={errorPassword ? errorPassword : errors.repeatPassword}
          value={values.repeatPassword}
          isValid={isValid}
          name="repeatPassword"
        />
        <ButtonCta
          type="submit"
          text="Sign up"
          handleClick={() => {}}
          className={style.buttonSubmit}
          disabled={!isActiveButton}
        />
      </form>
    </>
  );
};
