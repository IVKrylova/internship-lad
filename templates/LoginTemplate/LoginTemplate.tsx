import { FC, FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { H1, ButtonCta, Input, InputPassword, ErrorMessage } from "@components";
import { useFormAndValidation } from "@hooks";
import { login } from "@api";

import style from "./LoginTemplate.module.scss";

export const LoginTemplate: FC = () => {
  const router = useRouter();
  const { isValid, errors, values, handleChange } = useFormAndValidation();

  const [isActiveButton, setIsActiveButton] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsActiveButton(false);
    setMessage("");

    const token = await login(values.email, values.password);
    if (token && typeof token === "string") {
      setIsActiveButton(true);
      localStorage.setItem("token", token);
      router.push("/account");
    } else {
      setIsActiveButton(true);
      setMessage("An error has occurred");
    }
  };

  useEffect(() => {
    isValid ? setIsActiveButton(true) : setIsActiveButton(false);
  }, [isValid]);

  return (
    <>
      <ButtonCta
        text="Go Back"
        type="button"
        handleClick={() => router.back()}
        className={style.buttonGoBack}
      />
      <H1 title="Authorization" className={style.h1} />
      <p className={style.textLink}>
        <span>{`Need an account? `}</span>
        <Link className={style.link} href="/signup">
          Register now!
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
        />
        <ButtonCta
          type="submit"
          text="Log in"
          handleClick={() => {}}
          className={style.buttonSubmit}
          disabled={!isActiveButton}
        />
      </form>
    </>
  );
};
