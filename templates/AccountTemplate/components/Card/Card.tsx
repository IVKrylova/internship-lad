import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { TGuid } from "@types";

import style from "./Card.module.scss";

type TProps = {
  el: TGuid;
};

export const Card: FC<TProps> = ({ el }) => {
  const toggleLike = () => {};

  return (
    <li className={style.card}>
      <Link className={style.link} href={`/account/${el.id}`}>
        <button className={style.buttonLike} type="button" onClick={toggleLike}>
          <Image
            alt="icon like"
            src="/img/icon_like.svg"
            width={25}
            height={25}
          />
        </button>
        <Image
          className={style.avatar}
          alt={`photo ${el.first_name} ${el.last_name}`}
          src={el.avatar}
          width={150}
          height={150}
        />
        <p className={style.name}>{`${el.first_name} ${el.last_name}`}</p>
      </Link>
    </li>
  );
};
