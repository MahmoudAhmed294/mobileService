import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OrderResponse } from "./types";

export const orderApi = createApi({
  reducerPath: "order",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://635bc79faa7c3f113dc5fe7e.mockapi.io/api",
  }),
  endpoints: (builder) => ({
    order: builder.mutation<
    OrderResponse[],
      { username: string; password: string }
    >({
      query: () => ({
        url: `/order?_page=1`,
        method: "get",
      }),


    }),
  }),
});

export const { useOrderMutation } = orderApi;
