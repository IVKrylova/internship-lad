import { FC } from "react";

import { Logo } from "@components";

import style from "./HeaderAuth.module.scss";

export const HeaderAuth: FC = () => {
  return (
    <header className={style.header}>
      <Logo src="/img/logo_dark.svg" width={144} heigth={36} />
    </header>
  );
};
