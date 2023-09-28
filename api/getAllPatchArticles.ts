import axios, { AxiosResponse } from "axios";

import { TArticles } from "@types";

export const getAllPatchArticles = async (): Promise<Array<string>> => {
  try {
    const res: AxiosResponse<TArticles> = await axios.get<TArticles>(
      `https://jsonplaceholder.typicode.com/photos`
    );
    return res.data.map(el => el.id.toString());
  } catch (err) {
    console.error(`Error in the function getGuides: ${err}`);
    return Promise.reject(err);
  }
};
