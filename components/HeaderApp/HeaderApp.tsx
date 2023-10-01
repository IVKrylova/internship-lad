import { FC, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

import { ButtonCta, Logo } from "@components";
import { NavMenu } from "./components";

import style from "./HeaderApp.module.scss";

type TProps = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const HeaderApp: FC<TProps> = ({ isLogin, setIsLogin }) => {
  const handleExit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <header className={style.header}>
      <div className={style.company}>
        <Logo src="/img/logo_dark.svg" width={144} heigth={36} />
        <Link href="/#search" className={style.search}>
          <Image
            src="/img/icon_search.svg"
            alt="icon search"
            width={24}
            height={24}
          />
          <span className={style.searchText}>Search</span>
        </Link>
      </div>
      <NavMenu />
      {!isLogin && (
        <Link href="/login" className={style.login}>
          Log in
        </Link>
      )}
      {isLogin && (
        <button type="button" className={style.buttonExit} onClick={handleExit}>
          <Image
            alt="icon button exit"
            src="/img/icon_exit.svg"
            width={24}
            height={24}
          />
        </button>
      )}
    </header>
  );
};
