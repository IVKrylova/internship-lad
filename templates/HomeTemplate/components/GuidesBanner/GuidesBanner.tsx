import { FC } from "react";
import Image from "next/image";

import { ButtonCta, Banner, H2 } from "@components";
import { useAppSelector } from "@servises/hooks";

import style from "./GuidesBanner.module.scss";

export const GuidesBanner: FC = () => {
  const guides = useAppSelector((store) => store.guides.guides);

  const handleClickBecomeGuide = () => {};

  return (
    <Banner
      img="/img/guid_banner_1x.png"
      alt="desert image"
      actionId="become-guide"
      src2x="/img/guid_banner_2x.png"
      src3x="/img/guid_banner_3x.png"
      src4x="/img/guid_banner_4x.png"
      classAction={style.classAction}
    >
      <div className={style.info}>
        <p className={style.message}>
          <span>Be referenced on our site,</span>
          <span className={style.accent}>it's 100% free!</span>
        </p>
        <div className={style.action}>
          <ButtonCta
            type="button"
            text="I am a Tourist Guide"
            handleClick={handleClickBecomeGuide}
            className={style.buttonGuide}
          />
          <div className={style.guides}>
            <div className={style.list}>
              {guides?.slice(0, 4).map((el) => {
                return (
                  <div key={el.id} className={style.guide}>
                    <Image
                      className={style.avatar}
                      alt={`avatar ${el.first_name} ${el.last_name}`}
                      src={el.avatar}
                      width={52}
                      height={52}
                    />
                  </div>
                );
              })}
            </div>
            <p className={style.count}>
              <span className={style.countAccent}>1000+</span>
              tourist join us
            </p>
          </div>
        </div>
      </div>
      <H2 title="Are you a Tourist Guide in Egypt?" className={style.h2} />
    </Banner>
  );
};
