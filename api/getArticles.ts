import axios, { AxiosResponse } from "axios";

import { TArticles, TError } from "@types";

export const getArticles = async (start: number): Promise<TArticles | TError> => {
  try {
    const res: AxiosResponse<TArticles> = await axios.get<TArticles>(
      `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=10`
    );
    return res.data;
  } catch (err) {
    console.error(`Error in the function getArticles: ${err}`);
    return { error: err };
  }
};
