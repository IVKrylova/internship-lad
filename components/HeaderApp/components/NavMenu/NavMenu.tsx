import { FC } from "react";
import Link from "next/link";

import { LINKS } from "./constants";

import style from "./NavMenu.module.scss";

export const NavMenu: FC = () => {
  return (
    <nav>
      <ul className={style.list}>
        {LINKS.map((el, ind) => {
          return (
            <li key={ind}>
              <Link href={el.link} className={style.link}>
                {el.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
