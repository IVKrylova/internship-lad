import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { TGuid } from "@types";

import style from "./Guid.module.scss";

type TProps = {
  guid: TGuid;
};

export const Guid: FC<TProps> = ({ guid }) => {
  return (
    <li className={style.guid}>
      <Link href={`/guides/${guid.id}`} className={style.card}>
        <Image
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
