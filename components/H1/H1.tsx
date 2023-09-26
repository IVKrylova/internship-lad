import { FC } from "react";

import style from "./H1.module.scss";

type TProps = {
  className?: string;
  title: string;
};

export const H1: FC<TProps> = ({ className, title }) => {
  return (
    <h1 className={`${style.h1} ${className ? className : ""}`}>{title}</h1>
  );
};
