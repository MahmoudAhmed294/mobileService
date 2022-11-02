import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OrderResponse } from "./types";

export const orderApi = createApi({
  reducerPath: "order",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({
    order: builder.mutation<
    OrderResponse[],
    string
        >({
      query: (payload) => ({
        url: `/orders?page=0&limit=12${payload}`, //start=2022-10-11&end=2022-10-16
        method: "get",
        // headers:{
        //   Authorization: `Bearer ${payload}`
        // }
      }),


    }),
  }),
});

export const { useOrderMutation } = orderApi;
