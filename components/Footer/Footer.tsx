import { FC } from "react";
import Link from "next/link";

import { Logo } from "@components";
import { ColumnLinks, Contacts } from "./components";
import { RESOURCES, USEFUL_LINKS } from "./constants";

import style from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrap}>
        <div className={style.content}>
          <div className={style.about}>
            <Logo src="img/logo_light.svg" width={185} heigth={40} />
            <p className={style.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <ColumnLinks title="Useful Links" list={USEFUL_LINKS} />
          <ColumnLinks title="Resources" list={RESOURCES} />
          <Contacts />
        </div>

        <div className={style.policy}>
          <p className={style.copyright}>
            {`© ${new Date().getFullYear()} `}
            <span className={style.accent}>EgyptTour</span>
          </p>
          <Link className={style.link} href="/policy">Privacy Policy</Link>
          <Link className={style.link} href="/condition">Term of Condition</Link>
        </div>
      </div>
    </footer>
  );
};
