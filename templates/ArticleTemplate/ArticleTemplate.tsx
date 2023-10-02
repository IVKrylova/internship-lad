import { FC } from "react";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import { TArticle } from "@types";
import { H1, ButtonCta } from "@components";

import style from "./ArticleTemplate.module.scss";

type TProps = {
  article: TArticle;
};

export const ArticleTemplate: FC<TProps> = ({ article }) => {
  const router: NextRouter = useRouter();

  return (
    <>
      <ButtonCta
        text="Go Back"
        type="button"
        handleClick={() => router.back()}
        className={style.button}
      />
      <div className={style.title}>
        <Image
          width={400}
          height={300}
          alt={`image ${article.title}`}
          src={article.url}
          className={style.img}
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
