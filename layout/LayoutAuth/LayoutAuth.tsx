import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";

import { HeaderAuth, Footer } from '@components';

import style from './LayoutApp.module.scss';

type TProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const LayoutAuth: FC<TProps> = ({ children }) => {
  return (
    <div className={`${style.wrap} ${inter.className}`}>
      <HeaderAuth />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
