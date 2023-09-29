import axios, { AxiosResponse } from "axios";

import { TArticle, TError } from "@types";

export const getCurrentArticle = async (id: string): Promise<TArticle | TError> => {
  try {
    const res: AxiosResponse<TArticle> = await axios.get<TArticle>(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(`Error in the function getCurrentArticle: ${err}`);
    return { error: err };
  }
};
