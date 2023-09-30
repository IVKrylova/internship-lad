export type TArticle = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type TArticles = TArticle[];

export type TPathsArticle = {
  params: {
    id: string;
  };
}[];
