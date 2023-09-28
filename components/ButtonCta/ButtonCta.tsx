import { FC } from "react";

import style from "./ButtonCta.module.scss";

type TProps = {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  text: string;
  handleClick: () => void;
  disabled?: boolean;
};

export const ButtonCta: FC<TProps> = ({ className, type, text, handleClick, disabled }) => {
  return (
    <button
      type={type}
      className={`${className ? className : ""} ${style.button}`}
      onClick={handleClick}
      disabled={disabled !== undefined ? disabled : false}
    >
      {text}
    </button>
  );
};
