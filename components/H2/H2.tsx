import { FC } from "react";

import style from "./H2.module.scss";

type TProps = {
  className?: string;
  title: string;
};

export const H2: FC<TProps> = ({ className, title }) => {
  return (
    <h2 className={`${style.h2} ${className ? className : ""}`}>{title}</h2>
  );
};
