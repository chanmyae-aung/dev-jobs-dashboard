import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appId, appSecret, baseUrl } from "../constants/authKey";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ token, currentPage }) => ({
        url: `/admin/users/all?page=${currentPage}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["user"],
    }),
    getAllApplicants: builder.query({
      query: ({ token, currentPage }) => ({
        url: `/admin/applicants/users?page=${currentPage}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetAllApplicantsQuery } = userApi;
