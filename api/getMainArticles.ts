import axios, { AxiosResponse } from "axios";

import { TArticles } from "@types";

export const getMainArticles = async (): Promise<TArticles> => {
  try {
    const res: AxiosResponse<TArticles> = await axios.get<TArticles>(
      `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3`
    );
    return res.data;
  } catch (err) {
    console.error(`Error in the function getGuides: ${err}`);
    return Promise.reject(err);
  }
};
