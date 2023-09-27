import { FC } from "react";

import { ButtonCta, H2 } from "@components";
import { useAppSelector } from "@servises/hooks";
import { Guid } from "./components";

import style from "./Guides.module.scss";

export const Guides: FC = () => {
  const guides = useAppSelector((store) => store.guides.guides);

  const handleButtonClick = () => {};

  return (
    <section className={style.section} id="guides">
      <div className={style.header}>
        <H2 title="Guides for you!" />
        <ButtonCta
          type="button"
          text="See All Guides"
          handleClick={handleButtonClick}
          className={style.button}
        />
      </div>
      <ul className={style.list}>
        {guides?.map((el) => {
          return <Guid key={el.id} guid={el} />;
        })}
      </ul>
    </section>
  );
};
