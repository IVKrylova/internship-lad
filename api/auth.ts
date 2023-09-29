import axios, { AxiosResponse } from "axios";

import { TError, TToken } from "@types";

export const auth = async (
  email: string | undefined,
  password: string | undefined
): Promise<string | TError> => {
  try {
    if (email && password) {
      const token: AxiosResponse<TToken> = await axios.post<TToken>(
        `https://reqres.in/api/login`,
        {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }
      );
      return token.data.token;
    } else {
      return Promise.reject("email or password are undefound");
    }
  } catch (err: any) {
    console.error(`Error in the function auth: ${err}`);
    return { error: err };
  }
};
