import { FC, ReactNode, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import { HeaderApp, Footer } from "@components";
import { checkAuth } from "@utils";

import style from "./LayoutApp.module.scss";

type TProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const LayoutApp: FC<TProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const token = localStorage.getItem("token");
    // В коммерческом приложении для проверки автризации нужно
    // отправлять запрос с токеном на сервер, но фейковое API
    // не предоставляет такой возможности. Я создала функцию проверки
    // совпадения токенов, т.к. корректный токен заранее известен
    if (
      (!token && pathname.includes("account")) ||
      (token && !checkAuth(token) && pathname.includes("account"))
    ) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={`${style.wrap} ${inter.className}`}>
      <HeaderApp />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
