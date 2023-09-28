import { FC, ChangeEvent } from "react";

import style from "./Input.module.scss";

type TProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  error: string | undefined;
  className?: string;
  isValid: boolean;
  required?: boolean;
};

export const Input: FC<TProps> = ({
  label,
  name,
  type,
  placeholder,
  handleChange,
  value,
  error,
  className,
  isValid,
  required,
}) => {
  return (
    <div className={`${style.block} ${className ? className : ""}`}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={style.input}
        name={name}
        id={name}
        value={value || ""}
        onChange={handleChange}
        type={type}
        placeholder={placeholder ? placeholder : ""}
        required={required}
      />
      <span className={`${style.error} ${isValid ? "" : style.errorActive}`}>
        {error}
      </span>
    </div>
  );
};
