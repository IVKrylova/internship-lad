import { FC } from "react";

import { H2 } from "@components";
import { Card } from "./components";
import { STEPS } from './constants';

import style from "./About.module.scss";

export const About: FC = () => {
  return (
    <section className={style.about} id="about">
      <H2 title="How does it Work?" className={style.h2} />
      <ol className={style.list}>
        {STEPS.map((el, ind) => {
          return (<Card key={ind} item={el} />)
        })}
      </ol>
    </section>
  );
};
