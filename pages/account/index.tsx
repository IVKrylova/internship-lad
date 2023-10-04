import { connect } from "react-redux";
import { ReactNode } from "react";

import { AccountTemplate } from "@templates";
import { LayoutAccount } from "@layout";
import { TNextPageWithLayout } from "@types";

const Account: TNextPageWithLayout = () => {
  return <AccountTemplate />;
};

Account.getLayout = function getLayout(page: ReactNode) {
  return <LayoutAccount>{page}</LayoutAccount>;
};

export default connect((state) => state)(Account);
