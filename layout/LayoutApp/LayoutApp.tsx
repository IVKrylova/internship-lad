import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";

import { HeaderApp } from '@components';

import style from './LayoutApp.module.scss';

type TProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const LayoutApp: FC<TProps> = ({ children }) => {
  return (
    <div className={`${style.wrap} ${inter.className}`}>
      <HeaderApp />
      {children}
    </div>
  );
};
