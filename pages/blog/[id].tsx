import { connect } from "react-redux";
import { ReactNode } from "react";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";

import { ArticleTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout, TArticle, TPathsArticle } from "@types";
import { wrapper } from "@servises/store";
import { getAllPatchArticles, getCurrentArticle } from "@api";

const Article: TNextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = (article) => {
  return <ArticleTemplate article={article.pageProps.article} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPatchArticles();
  let paths: TPathsArticle = [];
  if (Array.isArray(data)) {
    paths = data?.map((el) => ({
      params: { id: el },
    }));
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      let article: TArticle | null = null;
      if (typeof params?.id === "string") {
        const res = await getCurrentArticle(params.id);
        if (res && "id" in res) article = res;
      }

      return {
        props: { article },
      };
    }
);

Article.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Article);
