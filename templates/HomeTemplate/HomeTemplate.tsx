import { FC } from "react";

import { Banner, Filters, Guides, About } from "./components";
import { ButtonCta, H1, H2 } from "@components";

import style from "./HomeTemplate.module.scss";

export const HomeTemplate: FC = () => {
  const handleButtonClick = () => {};

  const handleClickBecomeGuide = () => {};

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
        <ButtonCta
          type="button"
          text="I am a Tourist Guide"
          handleClick={handleClickBecomeGuide}
          className={style.buttonGuide}
        />
        <H1 title="Find the Best Egyptian Guide" className={style.h1} />
      </Banner>

      <Guides />
      <About />

      <Banner
        img="/img/guid_banner_1x.png"
        alt="desert image"
        actionId="become-guide"
        src2x="/img/guid_banner_2x.png"
        src3x="/img/guid_banner_3x.png"
        src4x="/img/guid_banner_4x.png"
      >
        <div className={style.info}>
          <p className={style.message}>
            Be referenced on our site,
            <span className={style.accent}>it's 100% free!</span>
          </p>
          <div>
            <ButtonCta
              type="button"
              text="Search"
              handleClick={handleButtonClick}
              className={style.buttonSearch}
            />
            <div className={style.guides}>
              <ul className={style.list}></ul>
              <p className={style.count}>
                <span className={style.countAccent}>1000+</span> tourist join us
              </p>
            </div>
          </div>
        </div>
        <H2 title="Are you a Tourist Guide in Egypt?" className={style.h2} />
      </Banner>
    </>
  );
};
