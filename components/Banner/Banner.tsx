import { FC, ReactNode } from "react";
import Image from "next/image";

import style from "./Banner.module.scss";

type TProps = {
  img: string;
  alt: string;
  actionId: string;
  children: ReactNode;
  src2x: string;
  src3x: string;
  src4x: string;
  classAction?: string;
};

export const Banner: FC<TProps> = ({
  img,
  alt,
  actionId,
  children,
  src2x,
  src3x,
  src4x,
  classAction,
}) => {
  return (
    <section
      aria-label="Find the Best Egyptian Guide"
      className={style.section}
    >
      <picture>
        <source media="(resolution: 2x)" srcSet={src2x} />
        <source media="(resolution: 3x)" srcSet={src3x} />
        <source media="(resolution > 3x)" srcSet={src4x} />
        <Image
          alt={alt}
          src={img}
          width={1360}
          height={740}
          className={style.background}
        />
      </picture>
      <div
        className={`${style.action} ${classAction ? classAction : ""}`}
        id={actionId}
      >
        {children}
      </div>
    </section>
  );
};
