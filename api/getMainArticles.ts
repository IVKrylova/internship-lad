import axios, { AxiosResponse } from "axios";

import { TArticles, TError } from "@types";

export const getMainArticles = async (): Promise<TArticles | TError> => {
  try {
    const res: AxiosResponse<TArticles> = await axios.get<TArticles>(
      `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3`
    );
    return res.data;
  } catch (err) {
    console.error(`Error in the function getMainArticles: ${err}`);
    return { error: err };
  }
};
