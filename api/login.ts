import axios, { AxiosResponse } from "axios";

type TToken = {
  token: string;
};

export const login = async (
  email: string | undefined,
  password: string | undefined
): Promise<string> => {
  try {
    if (email && password) {
      const token: AxiosResponse<TToken> = await axios.post<TToken>(
        `https://reqres.in/api/login`,
        {
          email: email,
          password: password,
        }
      );
      return token.data.token;
    } else {
      return Promise.reject("email or password are undefound");
    }
  } catch (err: any) {
    console.error(`Error in the function login: ${err}`);
    return err?.error;
  }
};