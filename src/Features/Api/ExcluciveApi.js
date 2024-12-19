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
    GetSingleCategory: builder.query({
      query: (id) => `/category/${id}`,
    }),
    GetAllProduct: builder.query({
      query: () => "/product",
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {
  useGetBannerQuery,
  useGetFlashSaleQuery,
  useGetBestSellingQuery,
  useGetCategoryQuery,
  useGetSingleCategoryQuery,
  useGetAllProductQuery,
  useGetSingleProductQuery,
} = ExclusiveApi;
