import { FC } from "react";
import Link from "next/link";

import { TLink } from "@types";

import style from "./ColumnLinks.module.scss";

type TProps = {
  list: TLink[];
  title: string;
};

export const ColumnLinks: FC<TProps> = ({ list, title }) => {
  return (
    <div className={style.column}>
      <h3 className={style.title}>{title}</h3>
      <nav>
        <ul className={style.list}>
          {list.map((el, ind) => {
            return (
              <li key={ind}>
                <Link className={style.link} href={el.link}>
                  {el.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
