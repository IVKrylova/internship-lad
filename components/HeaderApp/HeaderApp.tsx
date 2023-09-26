import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { ButtonCta, Logo } from "@components";
import { NavMenu } from "./components";

import style from "./HeaderApp.module.scss";

export const HeaderApp: FC = () => {
  const handleButtonClick = () => {};

  return (
    <header className={style.header}>
      <div className={style.company}>
        <Logo src="img/logo_dark.svg" width={144} heigth={36} />
        <Link href="/#search" className={style.search}>
          <Image
            src="img/icon_search.svg"
            alt="icon search"
            width={24}
            height={24}
          />
          <span className={style.searchText}>Search</span>
        </Link>
      </div>
      <NavMenu />
      <ButtonCta type="button" text="Log in" handleClick={handleButtonClick} />
    </header>
  );
};
