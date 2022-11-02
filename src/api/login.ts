import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginResponse } from "./types";

export const loginApi = createApi({
  reducerPath: "login",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse,
      { username: string; password: string }
    >({
      query: (payload) => ({
        url: `/auth/signin`,
        method: "post",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
