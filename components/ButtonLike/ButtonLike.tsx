import { FC, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "@servises/hooks";
import { fetchGuides, likeGuide } from "@servises/slices/guides";
import { NextThunkDispatch } from "@servises/store";
import { TGuides } from "@types";
import { getGuidesFromLocalStorage } from "@utils";

import style from "./ButtonLike.module.scss";

type TProps = {
  id: number;
  liked: boolean;
};

export const ButtonLike: FC<TProps> = ({ id, liked }) => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const guides: TGuides | null = useAppSelector((store) => store.guides.guides);
  const router: NextRouter = useRouter();
  const { pathname } = router;

  console.log(pathname);

  const [flag, setFlag] = useState<boolean>(false);

  const toggleLike = async (evt: MouseEvent<HTMLButtonElement>) => {
    const id = +evt.currentTarget.id;
    if (guides) {
      dispatch(likeGuide(id));
    }
    setFlag(true);
  };

  useEffect(() => {
    if (flag) {
      localStorage.setItem("guides", JSON.stringify(guides));
      setFlag(false);
    }
  }, [flag]);

  useEffect(() => {
    if (pathname === "/account/[id]") {
      const data: TGuides | false = getGuidesFromLocalStorage();
      if (data) dispatch(fetchGuides(data));
    }
  }, []);

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
