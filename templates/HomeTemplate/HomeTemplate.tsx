import { FC } from "react";

import { Banner, Filters } from "./components";
import { ButtonCta, H1 } from "@components";

import style from "./HomeTemplate.module.scss";

export const HomeTemplate: FC = () => {
  const handleButtonClick = () => {};

  return (
    <>
      <Banner
        img="/img/main_banner_1x.png"
        alt="desert image"
        actionId="search"
        src2x="/img/main_banner_2x.png"
        src3x="/img/main_banner_3x.png"
        src4x="/img/main_banner_4x.png"
      >
        <Filters />
        <ButtonCta type="button" text="Search" handleClick={handleButtonClick} />
        <H1 title="Find the Best Egyptian Guide" className={style.h1} />
      </Banner>
    </>
  );
};
