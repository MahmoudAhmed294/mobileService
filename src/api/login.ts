import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginResponse } from "./types";

export const loginApi = createApi({
  reducerPath: "login",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://635bc79faa7c3f113dc5fe7e.mockapi.io/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse[],
      { username: string; password: string }
    >({
      query: (payload) => ({
        url: `/user?password=${payload.password}&username=${payload.username}`,
        method: "get",
      }),


    }),
  }),
});

export const { useLoginMutation } = loginApi;
