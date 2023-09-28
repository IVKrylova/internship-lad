import { FC } from "react";

import { Logo } from "@components";

import style from "./HeaderApp.module.scss";

export const HeaderApp: FC = () => {
  return (
    <header className={style.header}>
      <Logo src="/img/logo_dark.svg" width={144} heigth={36} />
    </header>
  );
};
