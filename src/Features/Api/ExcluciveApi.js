import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ExclusiveApi = createApi({
  reducerPath: "ExclusiveApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${import.meta.env.VITE_API_BASE_URL}`,
    credentials: "include",
  }),
  tagTypes: ["cart"],
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
    AddToCart: builder.mutation({
      query: (productid) => ({
        url: `/addToCart`,
        method: "POST",
        body: productid,
      }),
      invalidatesTags: ["cart"],
    }),
    GetuserCartItem: builder.query({
      query: () => `/userCartItem`,
      providesTags: ["cart"],
    }),
    CartIncrement: builder.mutation({
      query: (cartId) => ({
        url: `/increment?cartid=${cartId}`,
        method: "POST",
      }),
      invalidatesTags: ["cart"],
    }),
    CartDecrement: builder.mutation({
      query: (cartId) => ({
        url: `/decrement?cartid=${cartId}`,
        method: "POST",
      }),
      invalidatesTags: ["cart"],
    }),
    DeleteCartItem: builder.mutation({
      query: (cartId) => ({
        url: `deleteCartItem?cartId=${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
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
  useAddToCartMutation,
  useGetuserCartItemQuery,
  useCartIncrementMutation,
  useCartDecrementMutation,
  useDeleteCartItemMutation,
} = ExclusiveApi;
