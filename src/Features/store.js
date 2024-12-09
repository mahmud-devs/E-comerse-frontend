import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Features/AllSlice/countSlice";

import { ProductApi } from "./Api/ProductApi";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
