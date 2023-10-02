import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { TGuide } from "@types";
import { H1, ButtonCta, ButtonLike } from "@components";
import { useAppSelector } from "@servises/hooks";

import style from "./GuideTemplate.module.scss";

type TProps = {
  guide: TGuide;
};

export const GuideTemplate: FC<TProps> = ({ guide }) => {
  const router = useRouter();
  const guides = useAppSelector((store) => store.guides.guides);

  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    if (guide) {
      const guides = localStorage.getItem("guides");
      if (guides !== null) {
        const item: TGuide = JSON.parse(guides).find(
          (el: TGuide) => el.id === guide.id
        );
        if (item && item.liked !== undefined) setLiked(item.liked);
      }
    }
  }, [guide, guides]);

  return (
    <>
      <ButtonCta
        text="Go Back"
        type="button"
        handleClick={() => router.back()}
        className={style.button}
      />
      <H1
        className={style.title}
        title={`${guide.first_name} ${guide.last_name}`}
      />
      <div className={style.about}>
        <ButtonLike id={guide.id} liked={liked} />
        <Image
          alt={`photo ${guide.first_name} ${guide.last_name}`}
          src={guide.avatar}
          width={200}
          height={200}
          className={style.avatar}
        />
        <p className={style.contact}>{`Contact: ${guide.email}`}</p>
      </div>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eius
        culpa a atque sunt adipisci illo quisquam, ipsum iure ab dolor voluptate
        suscipit dolore esse nam nisi perspiciatis aperiam laborum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Commodi, laboriosam illum
        minima est sunt eum similique repudiandae eaque sed perspiciatis ullam
        iste. Eos facilis quam fugiat obcaecati nostrum ipsam qui. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Ex debitis, voluptate,
        explicabo ullam laudantium obcaecati tempora perspiciatis, possimus
        alias deserunt consectetur praesentium sit eveniet labore! Praesentium
        sint nemo doloribus odio?
      </p>
    </>
  );
};
