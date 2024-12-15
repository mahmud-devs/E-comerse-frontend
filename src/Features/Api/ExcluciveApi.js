import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ExclusiveApi = createApi({
  reducerPath: "ExclusiveApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    GetBanner: builder.query({
      query: () => "/banner",
    }),
    GetFlashSale: builder.query({
      query: () => "/flashSale",
    }),
    GetBestSelling: builder.query({
      query: () => "/bestSelling",
    }),
    GetCategory: builder.query({
      query: () => "/category",
    }),
    GetAllProduct: builder.query({
      query: () => "/product",
    }),
  }),
});

export const {
  useGetBannerQuery,
  useGetFlashSaleQuery,
  useGetBestSellingQuery,
  useGetCategoryQuery,
  useGetAllProductQuery,
} = ExclusiveApi;
