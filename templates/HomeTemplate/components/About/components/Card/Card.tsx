import { FC } from "react";
import Image from "next/image";

import { TStepCard } from "@types";

import style from "./Card.module.scss";

type TProps = {
  item: TStepCard;
};

export const Card: FC<TProps> = ({ item }) => {
  return (
    <li className={style.card}>
      <picture>
        <source media="(resolution: 2x)" srcSet={item.src2x} />
        <source media="(resolution: 3x)" srcSet={item.src3x} />
        <source media="(resolution > 3x)" srcSet={item.src4x} />
        <Image alt={item.alt} src={item.src} width={174} height={312} />
      </picture>
      <p className={style.step}>{item.text}</p>
    </li>
  );
};
