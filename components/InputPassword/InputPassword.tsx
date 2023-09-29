import { FC, ChangeEvent, useState } from "react";
import Image from "next/image";

import { Input } from "@components";

import style from "./InputPassword.module.scss";

type TProps = {
  label: string;
  placeholder?: string;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  error: string | undefined;
  className?: string;
  isValid: boolean;
};

export const InputPassword: FC<TProps> = ({
  label,
  handleChange,
  error,
  value,
  isValid,
}) => {
  const [srcImg, setSrcImg] = useState<string>("/img/icon_show_password.svg");
  const [typeButton, setTypeButton] = useState<"text" | "password">("password");

  const handleHidePassword = () => {
    if (typeButton === "password") {
      setTypeButton("text");
      setSrcImg("/img/icon_hide_password.svg");
    } else {
      setTypeButton("password");
      setSrcImg("/img/icon_show_password.svg");
    }
  }

  return (
    <div className={style.block}>
      <Input
        name="password"
        type={typeButton}
        label={label}
        handleChange={handleChange}
        error={error}
        value={value}
        isValid={isValid}
        required={true}
      />
      <button
        className={style.button}
        type="button"
        aria-label="button to show a password"
        onClick={handleHidePassword}
      >
        <Image
          src={srcImg}
          alt="icon show/hide password"
          width={18}
          height={18}
        />
      </button>
    </div>
  );
};
