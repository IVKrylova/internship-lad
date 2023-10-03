import { FC } from "react";

import { Filters } from "./components";
import { ButtonCta, H1, Banner } from "@components";
import { useAppSelector, useAppDispatch } from "@servises/hooks";
import { fetchMainGuidesList } from "@servises/slices/mainGuidesList";
import { NextThunkDispatch } from "@servises/store";
import { TGuides } from "@types";

import style from "./MainBanner.module.scss";

export const MainBanner: FC = () => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const guides: TGuides | null = useAppSelector((store) => store.guides.guides);

  const handleButtonClick = () => {
    dispatch(fetchMainGuidesList(guides));
  };

  return (
    <Banner
      img="/img/main_banner_1x.png"
      alt="desert image"
      actionId="search"
      src2x="/img/main_banner_2x.png"
      src3x="/img/main_banner_3x.png"
      src4x="/img/main_banner_4x.png"
    >
      <Filters />
      <ButtonCta
        type="button"
        text="Reset Filters"
        handleClick={handleButtonClick}
        className={style.buttonSearch}
      />
      <H1 title="Find the Best Egyptian Guide" className={style.h1} />
    </Banner>
  );
};
