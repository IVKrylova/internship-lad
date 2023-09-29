import axios, { AxiosResponse } from "axios";

import { TArticles, TError } from "@types";

export const getAllPatchArticles = async (): Promise<Array<string> | TError> => {
  try {
    const res: AxiosResponse<TArticles> = await axios.get<TArticles>(
      `https://jsonplaceholder.typicode.com/photos`
    );
    return res.data.map(el => el.id.toString());
  } catch (err) {
    console.error(`Error in the function getAllPatchArticles: ${err}`);
    return { error: err };
  }
};
