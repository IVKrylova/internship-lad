import { FC, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./Checkbox.module.scss";

type TProps = {
  className?: string;
  label: string;
  required?: boolean;
  name: string;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  isValid: boolean;
  isPolicy?: boolean;
};

export const Checkbox: FC<TProps> = ({
  className,
  label,
  required,
  name,
  handleChange,
  error,
  isValid,
  isPolicy,
}) => {
  return (
    <label className={`${style.label} ${className}`} htmlFor={name}>
      <input
        type="checkbox"
        className={style.input}
        id={name}
        name={name}
        required={required}
        onChange={handleChange}
      />
      <span className={style.text}>
        {label}
        {isPolicy && (
          <Link href="/policy" className={style.link}>
            <Image
              alt="icon arrow"
              src="/img/icon_arrow_up_right.svg"
              width={20}
              height={20}
            />
          </Link>
        )}
      </span>
      <span className={`${style.error} ${isValid ? "" : style.errorActive}`}>
        {error}
      </span>
    </label>
  );
};
