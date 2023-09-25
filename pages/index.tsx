import { connect } from "react-redux";
import { ReactNode } from "react";

import { HomeTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout } from "@types";

const Home: TNextPageWithLayout = () => {
  return <HomeTemplate />;
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Home);
