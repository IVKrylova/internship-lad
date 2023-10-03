import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useAppDispatch } from "@servises/hooks";
import { fetchArticles } from "@servises/slices/articles";
import { fetchGuides } from "@servises/slices/guides";
import { fetchMainGuidesList } from "@servises/slices/mainGuidesList";
import { NextThunkDispatch } from "@servises/store";

import style from "./ButtonExit.module.scss";

type TProps = {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const ButtonExit: FC<TProps> = ({ setIsLogin }) => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const router = useRouter();

  const handleExit = () => {
    localStorage.clear();
    setIsLogin(false);
    dispatch(fetchArticles(null));
    dispatch(fetchGuides(null));
    dispatch(fetchMainGuidesList(null));
    router.push("/login");
  };

  return (
    <button type="button" className={style.buttonExit} onClick={handleExit}>
      <Image
        alt="icon button exit"
        src="/img/icon_exit.svg"
        width={24}
        height={24}
        className={style.icon}
      />
    </button>
  );
};
