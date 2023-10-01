import { FC, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { TGuid } from "@types";
import { useAppDispatch, useAppSelector } from "@servises/hooks";
import { fetchGuides } from "@servises/slices/guides";
import { NextThunkDispatch } from "@servises/store";
import { toggleLikeGuide } from "@utils";

import style from "./Card.module.scss";

type TProps = {
  el: TGuid;
};

export const Card: FC<TProps> = ({ el }) => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const guides = useAppSelector((store) => store.guides.guides);

  const toggleLike = (evt: MouseEvent<HTMLButtonElement>) => {
    const id = +evt.currentTarget.id;
    const arr = toggleLikeGuide(structuredClone(guides), id);
    dispatch(fetchGuides(arr));
    localStorage.setItem("guides", JSON.stringify(arr));
  };

  return (
    <li className={style.card}>
      <button
        className={style.buttonLike}
        id={`${el.id}`}
        type="button"
        onClick={toggleLike}
      >
        <Image
          alt="icon like"
          src={el.liked ? "/img/icon_like_pressed.svg" : "/img/icon_like.svg"}
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
      <Link className={style.link} href={`/account/${el.id}`}>
        <p className={style.name}>{`${el.first_name} ${el.last_name}`}</p>
      </Link>
    </li>
  );
};
