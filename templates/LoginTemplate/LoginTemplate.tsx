import { FC } from "react";
import { useRouter } from "next/router";

import { H1, ButtonCta, Input, InputPassword } from "@components";
import { useFormAndValidation } from "@hooks";

import style from "./LoginTemplate.module.scss";

export const LoginTemplate: FC = () => {
  const router = useRouter();
  const { isValid, errors, values, handleChange } = useFormAndValidation();

  return (
    <>
      <ButtonCta
        text="Go Back"
        type="button"
        handleClick={() => router.back()}
        className={style.buttonGoBack}
      />
      <H1 title="Authorization" className={style.h1} />
      <form className={style.form} noValidate>
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
          disabled={!isValid}
        />
      </form>
    </>
  );
};
