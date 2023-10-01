import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { TGuide } from "@types";
import { ButtonLike } from "@components";

import style from "./Card.module.scss";

type TProps = {
  el: TGuide;
};

export const Card: FC<TProps> = ({ el }) => {
  return (
    <li className={style.card}>
      <ButtonLike
        id={el.id}
        liked={el.liked !== undefined ? el.liked : false}
      />
      <Image
        className={style.avatar}
        alt={`photo ${el.first_name} ${el.last_name}`}
        src={el.avatar}
        width={150}
        height={150}
      />
      <Link className={style.link} href={`/account/${el.id}`}>
        <p className={style.name}>{`${el.first_name} ${el.last_name}`}</p>
      </Link>
    </li>
  );
};
