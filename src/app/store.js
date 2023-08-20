import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "../features/authSlice";
import themeSlice from "../features/themeSlice";
import { companyApi } from "../api/companyApi";
import { jobApi } from "../api/jobApi";
import { userApi } from "../api/userApi";
import { dashboardApi } from "../api/dashboardApi";
import userSlice from "../features/userSlice";
import companySlice from "../features/companySlice";
import applicantSlice from "../features/applicantSlice";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice,
    [companyApi.reducerPath]: companyApi.reducer,
    companySlice: companySlice,
    [jobApi.reducerPath]: jobApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userSlice: userSlice,
    applicantSlice: applicantSlice,
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
