import { connect } from "react-redux";
import { ReactNode } from "react";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";

import { ArticleTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout, TArticle } from "@types";
import { wrapper } from "@servises/store";
import { getAllPatchArticles, getCurrentArticle } from "@api";

const Article: TNextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = (article) => {
  return <ArticleTemplate article={article.pageProps.article} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPatchArticles();
  const paths = data?.map((el) => ({
    params: { id: el },
  }));

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
        article = await getCurrentArticle(params.id);
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
