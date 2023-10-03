import { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { LINKS } from "./constants";

import style from "./MobileMenu.module.scss";

export const MobileMenu: FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const menu = useRef<HTMLMenuElement | null>(null);

  const handleClickOutside = (evt: MouseEvent) => {
    if (
      !menu.current?.contains(evt.target as Node) &&
      (evt.target as HTMLImageElement)?.id !== "buttonMenu"
    ) {
      closeMenu();
    }
  };

  const handleClickMenu = () => {
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", closeMenu);

    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={style.block}>
      <button type="button" onClick={handleClickMenu} className={style.button}>
        <Image
          alt="icon mobile menu"
          src="/img/icon_menu.svg"
          width={22}
          height={22}
          id="buttonMenu"
        />
      </button>
      <nav
        ref={menu}
        className={`${style.menu} ${menuActive ? style.menuActive : ""}`}
      >
        <ul className={style.list}>
          {LINKS.map((el, ind) => {
            return (
              <li key={ind}>
                <Link href={el.link} className={style.link} onClick={closeMenu}>
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
