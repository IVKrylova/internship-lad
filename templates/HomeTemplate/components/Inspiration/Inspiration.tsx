import { FC } from "react";

import { Article } from "./components";
import { TArticles } from "@types";
import { H2 } from "@components";

import style from "./Inspiration.module.scss";

type TProps = {
  articles: TArticles;
};

export const Inspiration: FC<TProps> = ({ articles }) => {
  return (
    <section className={style.section} id="inspiration">
      <H2 title="Learn more About Egypt" className={style.h2} />
      <ul className={style.list}>
        {articles?.map((el) => {
          return <Article key={el.id} el={el} />;
        })}
      </ul>
    </section>
  );
};
