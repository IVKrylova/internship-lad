import { connect } from "react-redux";
import { ReactNode } from "react";

import { SignupTemplate } from "@templates";
import { LayoutAuth } from "@layout";
import { TNextPageWithLayout } from "@types";

const Signup: TNextPageWithLayout = () => {
  return <SignupTemplate />;
};

Signup.getLayout = function getLayout(page: ReactNode) {
  return <LayoutAuth>{page}</LayoutAuth>;
};

export default connect((state) => state)(Signup);
