import axios, { AxiosResponse } from "axios";

import { TGuides, GuidesData } from "@types";

export const getGuides = async (): Promise<TGuides> => {
  try {
    const res1: AxiosResponse<GuidesData> = await axios.get<GuidesData>(
      `https://reqres.in/api/users?page=1`
    );
    const res2: AxiosResponse<GuidesData> = await axios.get<GuidesData>(
      `https://reqres.in/api/users?page=2`
    );
    const data1 = res1.data.data;
    const data2 = res2.data.data;

    return data1.concat(data2);
  } catch (err) {
    console.error(`Error in the function getGuides: ${err}`);
    return Promise.reject(err);
  }
};
