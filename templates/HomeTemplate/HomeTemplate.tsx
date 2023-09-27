import { FC } from "react";

import { MainBanner, Guides, About, GuidesBanner } from "./components";

export const HomeTemplate: FC = () => {
  return (
    <>
      <MainBanner />
      <Guides />
      <About />
      <GuidesBanner />
    </>
  );
};
