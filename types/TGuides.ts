export type TGuides = TGuide[];

export type TGuide = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  liked?: boolean;
};

export type TGuidesData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TGuides;
  support: {
    url: string;
    text: string;
  };
};

export type TCurrentGuideData = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
};

export type TPathsGuides = {
  params: {
    id: string;
  };
}[];

export type TResUpdateAvatar = {
  avatar: string;
  updatedAt: string;
};
