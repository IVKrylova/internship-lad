import { FC, useState } from "react";

import { ButtonCta, H1 } from "@components";
import { useAppDispatch, useAppSelector } from "@servises/hooks";
import { fetchArticles } from "@servises/slices/articles";
import { getArticles } from "@api";
import { NextThunkDispatch } from "@servises/store";
import { Article } from "./components";
import { MAX_COUNT_ARTICLES } from "./constants";
import { TArticles } from "@types";

import style from "./BlogTemplate.module.scss";

export const BlogTemplate: FC = () => {
  const [countArticles, setCountArticles] = useState<number>(10);

  const dispatch = useAppDispatch() as NextThunkDispatch;
  const articles: TArticles | null = useAppSelector((store) => store.articles.articles);

  const getMoreArticles = async () => {
    if (countArticles < MAX_COUNT_ARTICLES) {
      const arr = structuredClone(articles);
      const res = await getArticles(countArticles);
      if (res && Array.isArray(res)) dispatch(fetchArticles(arr?.concat(res)));
      setCountArticles((prev) => prev + 10);
    }
  };

  return (
    <>
      <H1 title="Learn more About Egypt" className={style.h1} />
      <ul className={style.list}>
        {articles?.map((el) => {
          return <Article el={el} key={el.id} />;
        })}
      </ul>
      <ButtonCta
        type="button"
        text="More articles"
        handleClick={getMoreArticles}
        className={style.button}
        disabled={!(countArticles === countArticles)}
      />
    </>
  );
};
