import { FC } from "react";
import { useRouter, NextRouter } from "next/router";

import { H1, ButtonCta } from "@components";

import style from "./PolicyTemplate.module.scss";

export const PolicyTemplate: FC = () => {
  const router: NextRouter = useRouter();

  return (
    <>
      <ButtonCta
        text="Go Back"
        type="button"
        handleClick={() => router.back()}
      />
      <H1 title="Privacy Policy" className={style.h1} />
      <ol className={style.mainList}>
        <li className={style.mainItem}>
          <span className={style.subtitle}>Lorem ipsum</span>
          <ol className={style.subList}>
            <li className={style.item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum viverra ante, eu facilisis nibh malesuada nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. In hac habitasse platea dictumst.
            </li>
            <li className={style.item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum viverra ante, eu facilisis nibh malesuada nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. In hac habitasse platea dictumst.
            </li>
          </ol>
        </li>

        <li className={style.mainItem}>
          <span className={style.subtitle}>Lorem ipsum dolor sit amet</span>
          <ol className={style.subList}>
            <li className={style.item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum viverra ante, eu facilisis nibh malesuada nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. In hac habitasse platea dictumst.
            </li>
            <li className={style.item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum viverra ante, eu facilisis nibh malesuada nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. In hac habitasse platea dictumst.
            </li>
            <li className={style.item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum viverra ante, eu facilisis nibh malesuada nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. In hac habitasse platea dictumst.
            </li>
            <li className={style.item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum viverra ante, eu facilisis nibh malesuada nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. In hac habitasse platea dictumst.
            </li>
            <li className={style.item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum viverra ante, eu facilisis nibh malesuada nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. In hac habitasse platea dictumst.
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};
