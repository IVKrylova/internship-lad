import { FC } from "react";

import style from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrap}>footer</div>
    </footer>
  );
};
