import axios, { AxiosResponse } from "axios";

import { TResUpdateAvatar, TError } from "@types";

export const updateAvatar = async (
  id: number,
  avatar: string | undefined
): Promise<string | TError> => {
  try {
    if (avatar) {
      const res: AxiosResponse<TResUpdateAvatar> =
        await axios.patch<TResUpdateAvatar>(
          `https://reqres.in/api/users/${id}`,
          {
            avatar: avatar,
          }
        );

      return res.data.avatar;
    } else {
      return Promise.reject("avatar is undefined");
    }
  } catch (err) {
    console.error(`Error in the function getGuides: ${err}`);
    return { error: err };
  }
};
