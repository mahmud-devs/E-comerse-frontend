import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Features/AllSlice/countSlice";

import { ProductApi } from "./Api/ProductApi";
import { BannerApi } from "./Api/BannerApi";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [BannerApi.reducerPath]: BannerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(BannerApi.middleware),
});
