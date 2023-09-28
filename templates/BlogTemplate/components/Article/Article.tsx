import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { H2 } from "@components";
import { TArticle } from "@types";

import style from "./Article.module.scss";

type TProps = {
  el: TArticle;
};

export const Article: FC<TProps> = ({ el }) => {
  return (
    <li className={style.card}>
      <Image alt={`image ${el.title}`} src={el.url} width={300} height={200} />
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
