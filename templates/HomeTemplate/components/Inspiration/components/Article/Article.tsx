import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { TArticle } from "@types";
import { ImageWithHideOnError } from "@components";

import style from "./Article.module.scss";

type TProps = {
  el: TArticle;
};

export const Article: FC<TProps> = ({ el }) => {
  return (
    <li className={style.article}>
      <ImageWithHideOnError
        alt={el.title}
        src={el.url}
        className={style.img}
        width={550}
        height={367}
      />
      <div className={style.description}>
        <p className={style.type}>Article</p>
        <p className={style.title}>
          <span>{el.title}</span>
          <Link className={style.link} href={`/blog/${el.id}`}>
            <Image
              alt="icon arrow"
              src="img/icon_arrow_up_right.svg"
              width={42}
              height={42}
              className={style.icon}
            />
          </Link>
        </p>
      </div>
    </li>
  );
};
