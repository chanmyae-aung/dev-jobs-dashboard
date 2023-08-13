import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appId, appSecret, baseUrl } from "../constants/authKey";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password, token }) => ({
        url: "/admin",
        method: "POST",
        body: { email, password },
        headers: {
            "app-id": appId,
            "app-secret": appSecret,
            authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['auth'],
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "/admin/logout",
        method: "POST",
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`
        },
        invalidatesTags: ["auth"]
      }) ,
    })
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
