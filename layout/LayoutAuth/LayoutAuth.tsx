import { FC, ReactNode, useEffect } from "react";
import { Inter } from "next/font/google";
import { useRouter, NextRouter  } from "next/router";

import { HeaderAuth, Footer } from "@components";
import { checkAuth } from "@utils";

import style from "./LayoutAuth.module.scss";

type TProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const LayoutAuth: FC<TProps> = ({ children }) => {
  const router: NextRouter  = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Фейковое API не предоставляет возможности проверки авторизации
    // путем отправки запроса с токеном на сервер. Я создала функцию проверки
    // совпадения токенов, т.к. корректные токены заранее известны
    if (token && checkAuth(token)) router.push("/account");
  }, []);

  return (
    <div className={`${style.wrap} ${inter.className}`}>
      <HeaderAuth />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
