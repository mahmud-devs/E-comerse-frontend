import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BannerApi = createApi({
  reducerPath: "BannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    GetBanner: builder.query({
      query: () => "/banner",
    }),
  }),
});

export const { useGetBannerQuery } = BannerApi;
