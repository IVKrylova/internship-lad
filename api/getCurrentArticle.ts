import axios, { AxiosResponse } from "axios";

import { TArticle } from "@types";

export const getCurrentArticle = async (id: string): Promise<TArticle> => {
  try {
    const res: AxiosResponse<TArticle> = await axios.get<TArticle>(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(`Error in the function getGuides: ${err}`);
    return Promise.reject(err);
  }
};
