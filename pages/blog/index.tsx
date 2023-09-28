import { connect } from "react-redux";
import { ReactNode } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { BlogTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout, TArticles } from "@types";
import { getArticles } from "@api";
import { NextThunkDispatch, wrapper } from "@servises/store";
import { fetchArticles } from "@servises/slices/articles";

const Blog: TNextPageWithLayout = () => {
  return <BlogTemplate />;
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;

    const articles: TArticles = await getArticles(0);
    dispatch(fetchArticles(articles));

    return {
      props: {},
    };
  }
);

Blog.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Blog);
