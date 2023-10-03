import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./Logo.module.scss";

type TProps = {
  className?: string;
  src: string;
  width: number;
  heigth: number;
};

export const Logo: FC<TProps> = ({ className, src, width, heigth }) => {
  return (
    <Link href="/" className={`${className ? className : ""}`}>
      <Image
        src={src}
        alt="logo EgyptTour"
        width={width}
        height={heigth}
        className={style.img}
      />
    </Link>
  );
};
