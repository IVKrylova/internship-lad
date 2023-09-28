import { FC } from "react";
import Image from "next/image";

import { TArticle } from "@types";
import { H1 } from "@components";

import style from "./ArticleTemplate.module.scss";

type TProps = {
  article: TArticle;
};

export const ArticleTemplate: FC<TProps> = ({ article }) => {
  return (
    <>
      <div className={style.title}>
        <Image
          width={400}
          height={300}
          alt={`image ${article.title}`}
          src={article.url}
        />
        <H1 title={article.title} className={style.h1} />
      </div>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        dignissimos quaerat, itaque, debitis, hic corporis placeat perspiciatis
        fuga aut nulla ducimus magni enim cumque! Dolorem recusandae expedita
        quo optio necessitatibus.
      </p>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        dignissimos quaerat, itaque, debitis, hic corporis placeat perspiciatis
        fuga aut nulla ducimus magni enim cumque! Dolorem recusandae expedita
        quo optio necessitatibus.
      </p>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        dignissimos quaerat, itaque, debitis, hic corporis placeat perspiciatis
        fuga aut nulla ducimus magni enim cumque! Dolorem recusandae expedita
        quo optio necessitatibus.
      </p>
    </>
  );
};
