import { connect } from "react-redux";
import { ReactNode } from "react";

import { AccountTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout } from "@types";

const Account: TNextPageWithLayout = () => {
  return <AccountTemplate />;
};

Account.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Account);
