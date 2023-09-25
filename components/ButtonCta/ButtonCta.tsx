import { FC } from "react";

import style from "./ButtonCta.module.scss";

type TProps = {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  text: string;
};

export const ButtonCta: FC<TProps> = ({ className, type, text }) => {
  return (
    <button
      type={type}
      className={`${className ? className : ""} ${style.button}`}
    >
      {text}
    </button>
  );
};
