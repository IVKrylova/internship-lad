export type TGuides = TGuid[];

export type TGuid = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  liked: boolean;
};

export type GuidesData = {
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
