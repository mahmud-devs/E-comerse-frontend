import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Features/AllSlice/countSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
