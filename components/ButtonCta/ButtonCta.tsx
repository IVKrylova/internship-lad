import { FC } from "react";

import style from "./ButtonCta.module.scss";

type TProps = {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  text: string;
  handleClick: () => void;
};

export const ButtonCta: FC<TProps> = ({ className, type, text, handleClick }) => {
  return (
    <button
      type={type}
      className={`${className ? className : ""} ${style.button}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
