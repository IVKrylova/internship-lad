import { FC, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@servises/hooks";
import { likeGuide } from "@servises/slices/guides";
import { NextThunkDispatch } from "@servises/store";

import style from "./ButtonLike.module.scss";

type TProps = {
  id: number;
  liked: boolean;
};

export const ButtonLike: FC<TProps> = ({ id, liked }) => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const guides = useAppSelector((store) => store.guides.guides);

  const [flag, setFlag] = useState<boolean>(false);

  const toggleLike = (evt: MouseEvent<HTMLButtonElement>) => {
    const id = +evt.currentTarget.id;
    dispatch(likeGuide(id));
    setFlag(true);
  };

  useEffect(() => {
    if (flag) {
      localStorage.setItem("guides", JSON.stringify(guides));
      setFlag(false);
    }
  }, [flag]);

  return (
    <button
      className={style.buttonLike}
      id={`${id}`}
      type="button"
      onClick={toggleLike}
    >
      <Image
        alt="icon like"
        src={liked ? "/img/icon_like_pressed.svg" : "/img/icon_like.svg"}
        width={25}
        height={25}
      />
    </button>
  );
};
