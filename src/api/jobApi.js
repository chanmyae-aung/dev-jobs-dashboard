import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appId, appSecret, baseUrl } from "../constants/authKey";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["job"],
  endpoints: (builder) => ({
    getJob: builder.query({
      query: ({token, currentPage}) => ({
        url: `/admin/job?page=${currentPage}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
    getJobDetail: builder.query({
      query: ({ token, id }) => ({
        url: `/admin/job/${id}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
    createJob: builder.mutation({
      query: ({ formData, token }) => ({
        url: "/admin/job",
        method: "POST",
        body: formData,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["job"],
    }),
    updateJob: builder.mutation({
      query: ({updateData, token, id}) => ({
        url: `/admin/job/update/${id}`,
        method: "POST",
        body: updateData,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["job"],
    }),
    deleteJob: builder.mutation({
      query: ({ token, id }) => ({
        url: `/admin/job/${id}`,
        method: "DELETE",
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["job"],
    }),
  }),
});

export const {
  useGetJobQuery,
  useGetJobDetailQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobApi;
