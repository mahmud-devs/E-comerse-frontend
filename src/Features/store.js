import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Features/AllSlice/countSlice";

import cartslice, { getTotalItem } from "./AllSlice/cartSlice";
import { ProductApi } from "./Api/ProductApi";
import { ExclusiveApi } from "./Api/ExcluciveApi";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    cart: cartslice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [ExclusiveApi.reducerPath]: ExclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(ExclusiveApi.middleware),
});

store.dispatch(getTotalItem());
