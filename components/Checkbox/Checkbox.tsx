import { FC, ChangeEvent } from 'react';

import style from './Checkbox.module.scss';

type TProps = {
  className?: string;
  label: string;
  required?: boolean;
  name: string;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  isValid: boolean;
};

export const Checkbox: FC<TProps> = ({
  className,
  label,
  required,
  name,
  handleChange,
  error,
  isValid,
}) => {
  return (
    <label className={`${style.label} ${className}`} htmlFor={name}>
      <input
        type='checkbox'
        className={style.input}
        id={name}
        name={name}
        required={required}
        onChange={handleChange}
      />
      <span className={style.text}>
        {label}
      </span>
      <span className={`${style.error} ${isValid ? "" : style.errorActive}`}>
        {error}
      </span>
    </label>
  );
}