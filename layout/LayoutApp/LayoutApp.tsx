import { FC, ReactNode, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter, NextRouter  } from "next/router";

import { HeaderApp, Footer } from "@components";
import { checkAuth } from "@utils";

import style from "./LayoutApp.module.scss";

type TProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const LayoutApp: FC<TProps> = ({ children }) => {
  const router: NextRouter = useRouter();
  const { pathname } = router;

  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Фейковое API не предоставляет возможности проверки авторизации
    // путем отправки запроса с токеном на сервер. Я создала функцию проверки
    // совпадения токенов, т.к. корректные токены заранее известны
    if (token && checkAuth(token)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      if (pathname.includes("account")) router.push("/login");
    }
  }, []);

  return (
    <div className={`${style.wrap} ${inter.className}`}>
      <HeaderApp isLogin={isLogin} setIsLogin={setIsLogin} />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
