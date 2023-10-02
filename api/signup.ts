import axios, { AxiosResponse } from "axios";

import { TError, TUser } from "@types";

export const signup = async (
  email: string | undefined,
  password: string | undefined
): Promise<TUser | TError> => {
  try {
    if (email && password) {
      const user: AxiosResponse<TUser> = await axios.post<TUser>(
        `https://reqres.in/api/login`,
        {
          email: email,
          password: password,
        }
      );
      return user.data;
    } else {
      return Promise.reject("email or password are undefined");
    }
  } catch (err: any) {
    console.error(`Error in the function signup: ${err}`);
    return { error: err };
  }
};
