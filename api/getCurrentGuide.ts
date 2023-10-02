import axios, { AxiosResponse } from "axios";

import { TGuide, TCurrentGuideData, TError } from "@types";

export const getCurrentGuide = async (id: string): Promise<TGuide | TError> => {
  try {
    const res: AxiosResponse<TCurrentGuideData> = await axios.get<TCurrentGuideData>(
      `https://reqres.in/api/users/${id}`
    );
    const data: TGuide = res.data.data;
    data.liked = false;

    return data;
  } catch (err) {
    console.error(`Error in the function getGuides: ${err}`);
    return { error: err };
  }
};
