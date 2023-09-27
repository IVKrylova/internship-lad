import { FC } from "react";

import { TArticles } from "@types";
import {
  MainBanner,
  Guides,
  About,
  GuidesBanner,
  Inspiration,
} from "./components";

type TProps = {
  articles: TArticles;
}

export const HomeTemplate: FC<TProps> = ({ articles }) => {
  return (
    <>
      <MainBanner />
      <Guides />
      <About />
      <GuidesBanner />
      <Inspiration articles={articles} />
    </>
  );
};
