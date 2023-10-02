import { FC } from "react";
import { useRouter, NextRouter } from "next/router";

import { ButtonCta } from "@components";

import style from "./ButtonGoBack.module.scss";

export const ButtonGoBack: FC = () => {
  const router: NextRouter = useRouter();

  return (
    <ButtonCta text="Go Back" type="button" handleClick={() => router.back()} className={style.button} />
  );
};
