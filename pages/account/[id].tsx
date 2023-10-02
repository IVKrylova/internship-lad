import { connect } from "react-redux";
import { ReactNode } from "react";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";

import { GuideTemplate } from "@templates";
import { LayoutApp } from "@layout";
import { TNextPageWithLayout, TGuide, TPathsGuides, TError } from "@types";
import { wrapper } from "@servises/store";
import { getAllPatchGuides, getCurrentGuide } from "@api";

const Guide: TNextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = (guide) => {
  return <GuideTemplate guide={guide.pageProps.guide} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: string[] | TError = await getAllPatchGuides();
  let paths: TPathsGuides = [];
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
      let guide: TGuide | null = null;
      if (typeof params?.id === "string") {
        const res: TGuide | TError = await getCurrentGuide(params.id);
        if (res && "id" in res) guide = res;
      }

      return {
        props: { guide },
      };
    }
);

Guide.getLayout = function getLayout(page: ReactNode) {
  return <LayoutApp>{page}</LayoutApp>;
};

export default connect((state) => state)(Guide);
