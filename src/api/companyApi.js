import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appId, appSecret, baseUrl } from "../constants/authKey";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["company"],
  endpoints: (builder) => ({
    getCompany: builder.query({
      query: ({token, currentPage}) => ({
        url: `/admin/company?page=${currentPage}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["company"],
    }),
    getCompanyDetail: builder.query({
      query: ({ token, id }) => ({
        url: `/admin/company/${id}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["company"],
    }),
    createCompany: builder.mutation({
      query: ({ formData, token }) => ({
        url: "/admin/company",
        method: "POST",
        body: formData,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["company"],
    }),
    updateCompany: builder.mutation({
      query: ({updateData, token, id}) => ({
        url: `/admin/company/update/${id}`,
        method: "POST",
        body: updateData,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["company"],
    }),
    deleteCompany: builder.mutation({
      query: ({ token, id }) => ({
        url: `/admin/company/${id}`,
        method: "DELETE",
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["company"],
    }),
  }),
});

export const {
  useGetCompanyQuery,
  useGetCompanyDetailQuery,
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
