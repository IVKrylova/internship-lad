import { FC } from "react";
import Link from "next/link";

import { TGuide } from "@types";
import { ImageWithHideOnError } from "@components";

import style from "./Guid.module.scss";

type TProps = {
  guid: TGuide;
};

export const Guid: FC<TProps> = ({ guid }) => {
  return (
    <li className={style.guid}>
      <Link href={`/account/${guid.id}`} className={style.card}>
        <ImageWithHideOnError
          alt={`photo ${guid.first_name} ${guid.last_name}`}
          src={guid.avatar}
          width={188}
          height={188}
          className={style.avatar}
        />
        <p className={style.name}>{`${guid.first_name} ${guid.last_name}`}</p>
        <div className={style.rating} aria-label="raiting five stars"></div>
        <p className={style.review}>1000+ reviews</p>
      </Link>
    </li>
  );
};
