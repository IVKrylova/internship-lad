import { FC } from "react";

import { Card } from "./components";
import { useAppSelector } from "@servises/hooks";
import { TGuides } from "@types";

import style from "./AccountTemplate.module.scss";
import { H1 } from "@components";

export const AccountTemplate: FC = () => {
  const guides: TGuides = useAppSelector((store) => store.guides.guides);

  return (
    <section className={style.section}>
      <H1 className={style.title} title="Guides" />
      <ul className={style.list}>
        {guides?.map((el) => {
          return <Card key={el.id} el={el} />;
        })}
      </ul>
    </section>
  );
};
