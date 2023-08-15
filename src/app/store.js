import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "../features/authSlice";
import themeSlice from "../features/themeSlice";
import { companyApi } from "../api/companyApi";
import { jobApi } from "../api/jobApi";
import { userApi } from "../api/userApi";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice,
    [companyApi.reducerPath]: companyApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      companyApi.middleware,
      jobApi.middleware,
      userApi.middleware,
    ),
});
