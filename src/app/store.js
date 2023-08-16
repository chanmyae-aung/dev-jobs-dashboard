import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "../features/authSlice";
import themeSlice from "../features/themeSlice";
import { companyApi } from "../api/companyApi";
import { jobApi } from "../api/jobApi";
import { userApi } from "../api/userApi";
import { dashboardApi } from "../api/dashboardApi";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice,
    [companyApi.reducerPath]: companyApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      companyApi.middleware,
      jobApi.middleware,
      userApi.middleware,
      dashboardApi.middleware,
    ),
});
