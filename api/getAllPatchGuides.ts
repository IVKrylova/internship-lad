import axios, { AxiosResponse } from "axios";

import { TGuidesData, TError } from "@types";

export const getAllPatchGuides = async (): Promise<Array<string> | TError> => {
  try {
    const res1: AxiosResponse<TGuidesData> = await axios.get<TGuidesData>(
      `https://reqres.in/api/users?page=1`
    );
    const res2: AxiosResponse<TGuidesData> = await axios.get<TGuidesData>(
      `https://reqres.in/api/users?page=2`
    );
    const data1 = res1.data.data;
    const data2 = res2.data.data;
    const arr = data1.concat(data2).map((el) => {
      return el.id.toString();
    });

    return arr;
  } catch (err) {
    console.error(`Error in the function getGuides: ${err}`);
    return { error: err };
  }
};
