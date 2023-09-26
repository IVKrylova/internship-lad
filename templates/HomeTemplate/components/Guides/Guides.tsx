import { FC } from "react";

import style from "./Guides.module.scss";
import { ButtonCta, H2 } from "@components";

export const Guides: FC = () => {
  const handleButtonClick = () => {};

  return (
    <section className={style.section}>
      <div className={style.header}>
        <H2 title="" />
        <ButtonCta type="button" text="" handleClick={handleButtonClick} />
      </div>
    </section>
  );
};
