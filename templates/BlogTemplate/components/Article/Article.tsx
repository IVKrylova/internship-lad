import { FC } from "react";
import Link from "next/link";

import { H2, ImageWithHideOnError } from "@components";
import { TArticle } from "@types";

import style from "./Article.module.scss";

type TProps = {
  el: TArticle;
};

export const Article: FC<TProps> = ({ el }) => {
  return (
    <li className={style.card}>
      <ImageWithHideOnError
        alt={`image ${el.title}`}
        src={el.url}
        width={300}
        height={200}
        className={style.img}
      />
      <div className={style.description}>
        <Link href={`/blog/${el.id}`}>
          <H2 title={el.title} className={style.title} />
        </Link>
        <p className={style.summary}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ut ea
          consequatur exercitationem, id reprehenderit deleniti rerum laboriosam
          amet excepturi fuga mollitia, ab asperiores magni numquam delectus
          omnis nostrum. Animi?
        </p>
      </div>
    </li>
  );
};
