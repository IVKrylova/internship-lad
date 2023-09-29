import { FC } from "react";

import style from "./ErrorMessage.module.scss";

type TProps = {
  message: string,
  className?: string,
};

export const ErrorMessage: FC<TProps> = ({ message, className }) => {
  return (
    <p className={`${style.message} ${className ? className : ""}`}>
      {message}
    </p>
  );
};
