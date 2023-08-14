import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "../features/authSlice";
import themeSlice from "../features/themeSlice";
import { companyApi } from "../api/companyApi";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    [authApi.reducerPath] : authApi.reducer,
    authSlice: authSlice,
    [companyApi.reducerPath]: companyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, companyApi.middleware),
});
