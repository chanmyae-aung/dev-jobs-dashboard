import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appId, appSecret, baseUrl } from "../constants/authKey";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["dashboard"],
  endpoints: (builder) => ({
    getTotal: builder.query({
      query: (token) => ({
        url: `/admin/total/dashboard`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["dashboard"],
    }),
    getPopularJobs: builder.query({
      query: (token) => ({
        url: `/admin/total/popular/jobs`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["dashboard"],
    }),
    getNotiCount: builder.query({
      query: (token) => ({
        url: `/noti-count`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["dashboard"],
    }),
    getNotiList: builder.query({
      query: (token) => ({
        url: `/all-notification`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["dashboard"],
    })
  }),
});

export const { useGetTotalQuery, useGetPopularJobsQuery, useGetNotiCountQuery, useGetNotiListQuery } = dashboardApi;
