import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "../features/authSlice";
import themeSlice from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    [authApi.reducerPath] : authApi.reducer,
    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
