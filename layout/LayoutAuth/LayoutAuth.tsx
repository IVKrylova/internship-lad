import { FC, ReactNode, useEffect } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import { HeaderAuth, Footer } from "@components";
import { checkAuth } from "@utils";

import style from "./LayoutAuth.module.scss";

type TProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const LayoutAuth: FC<TProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // В коммерческом приложении для проверки автризации нужно
    // отправлять запрос с токеном на сервер, но фейковое API
    // не предоставляет такой возможности. Я создала функцию проверки
    // совпадения токенов, т.к. корректный токен заранее известен
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
