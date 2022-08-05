import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartProductsType, ProductType, ProductsType } from "../../ts/types";

import { SHOP_API } from "../../utils/API";
import { PAGINATION_LIMIT } from "../../utils/constants/PAGINATION_LIMIT";

export type ProductsRespone = {
  limit: number;
  products: ProductsType;
  skip: number;
  total: number;
};

type FetchArgs = {
  skip: number;
  category?: string;
  searchTerm?: string;
};

type UserOrderData = {
  cartItems: CartProductsType;
  formData: {
    [key: string]: string;
  };
};

export const shopApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: SHOP_API.URL }),

  endpoints: (builder) => ({
    getProductsByCategory: builder.query<ProductsRespone, FetchArgs>({
      query: ({ category, skip }) =>
        `${SHOP_API.PRODUCTS}/${SHOP_API.CATEGORY}/${category}?limit=${PAGINATION_LIMIT}&skip=${skip}`,
    }),
    getProductById: builder.query<ProductType, string | number>({
      query: (id) => `${SHOP_API.PRODUCTS}/${id}`,
    }),
    getProducts: builder.query<ProductsRespone, number>({
      query: (skip) =>
        `${SHOP_API.PRODUCTS}?limit=${PAGINATION_LIMIT}&skip=${skip}`,
    }),
    searchProductsForPreview: builder.query<ProductsType, string>({
      query: (searchQuery) =>
        searchQuery &&
        `${SHOP_API.PRODUCTS}${SHOP_API.SEARCH}${searchQuery}&select=title,price,thumbnail`,
      transformResponse: (result: ProductsRespone) => result.products,
    }),
    searchProducts: builder.query<ProductsRespone, FetchArgs>({
      query: ({ searchTerm, skip }) =>
        `${SHOP_API.PRODUCTS}${SHOP_API.SEARCH}${searchTerm}&limit=${PAGINATION_LIMIT}&skip=${skip}`,
    }),
    addUserOrder: builder.mutation({
      query: (orderData: UserOrderData) => ({
        url: `${SHOP_API.USERS}/add`,
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useSearchProductsForPreviewQuery,
  useSearchProductsQuery,
  useAddUserOrderMutation,
} = shopApi;
