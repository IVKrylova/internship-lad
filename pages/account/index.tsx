import { connect } from "react-redux";
import { ReactNode } from "react";
import { GetStaticProps } from "next";

import { AccountTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout, TGuides } from "@types";
import { getGuides } from "@api";
import { NextThunkDispatch, wrapper } from "@servises/store";
import { fetchGuides } from "@servises/slices/guides";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;

    const guides: TGuides = await getGuides();
    dispatch(fetchGuides(guides));

    return {
      props: {},
    };
  }
);

const Account: TNextPageWithLayout = () => {
  return <AccountTemplate />;
};

Account.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Account);
