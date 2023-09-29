import { connect } from "react-redux";
import { ReactNode } from "react";

import { LoginTemplate } from "@templates";
import { LayoutAuth } from "@layout";
import { TNextPageWithLayout } from "@types";

const Login: TNextPageWithLayout = () => {
  return <LoginTemplate />;
};

Login.getLayout = function getLayout(page: ReactNode) {
  return <LayoutAuth>{page}</LayoutAuth>;
};

export default connect((state) => state)(Login);
