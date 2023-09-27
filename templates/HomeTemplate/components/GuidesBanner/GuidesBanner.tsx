import { FC } from "react";

import { ButtonCta, Banner, H2 } from "@components";

import style from "./GuidesBanner.module.scss";

export const GuidesBanner: FC = () => {
  const handleClickBecomeGuide = () => {};

  return (
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
            text="I am a Tourist Guide"
            handleClick={handleClickBecomeGuide}
            className={style.buttonGuide}
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
  );
};
