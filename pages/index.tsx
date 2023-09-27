import { connect } from "react-redux";
import { ReactNode } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { HomeTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout, TGuides, TArticles } from "@types";
import { getGuides, getMainArticles } from "@api";
import { NextThunkDispatch, wrapper } from "@servises/store";
import { fetchGuides } from "@servises/slices/guides";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;

    const guides: TGuides = await getGuides();
    dispatch(fetchGuides(guides));

    const articles: TArticles = await getMainArticles();

    return {
      props: { articles },
    };
  }
);

const Home: TNextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = (articles) => {
  return <HomeTemplate articles={articles.pageProps.articles} />;
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Home);
