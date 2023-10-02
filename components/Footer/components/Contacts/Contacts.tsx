import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { ADDRESS, CONTACTS } from "./constants";

import style from "./Contacts.module.scss";

export const Contacts: FC = () => {
  return (
    <div className={style.column}>
      <h3 className={style.title}>Contact Us</h3>
      <ul className={style.listAdddress}>
        {ADDRESS.map((el, ind) => {
          return (
            <li key={ind} className={style.itemAddress}>
              <Image alt={el.alt} src={el.icon} width={24} height={24} />
              <span className={style.text}>{el.text}</span>
            </li>
          );
        })}
      </ul>
      <ul className={style.listNetworks}>
        {CONTACTS.map((el, ind) => {
          return (
            <li key={ind}>
              <Link href={el.link} className={style.link}>
                <Image alt={el.alt} src={el.icon} width={40} height={40} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
