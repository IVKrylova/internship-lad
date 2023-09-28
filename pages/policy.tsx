import { connect } from "react-redux";
import { ReactNode } from "react";

import { PolicyTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout } from "@types";

const Policy: TNextPageWithLayout = () => {
  return <PolicyTemplate />;
};

Policy.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Policy);
