import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CartProductsType,
  ProductType,
  ProductsType,
} from "../ts/ProductsTypes";

import { API_ENDPOINTS } from "../utils/constants/API";
import { PAGINATION_LIMIT } from "../utils/constants/PAGINATION_LIMIT";

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
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINTS.URL }),

  endpoints: (builder) => ({
    getProductsByCategory: builder.query<ProductsRespone, FetchArgs>({
      query: ({ category, skip }) =>
        `${API_ENDPOINTS.PRODUCTS}/${API_ENDPOINTS.CATEGORY}/${category}?limit=${PAGINATION_LIMIT}&skip=${skip}`,
    }),
    getProductById: builder.query<ProductType, string | number>({
      query: (id) => `${API_ENDPOINTS.PRODUCTS}/${id}`,
    }),
    getProducts: builder.query<ProductsRespone, number>({
      query: (skip) =>
        `${API_ENDPOINTS.PRODUCTS}?limit=${PAGINATION_LIMIT}&skip=${skip}`,
    }),
    searchProductsForPreview: builder.query<ProductsType, string>({
      query: (searchQuery) =>
        searchQuery &&
        `${API_ENDPOINTS.PRODUCTS}${API_ENDPOINTS.SEARCH}${searchQuery}&select=title,price,thumbnail`,
      transformResponse: (result: ProductsRespone) => result.products,
    }),
    searchProducts: builder.query<ProductsRespone, FetchArgs>({
      query: ({ searchTerm, skip }) =>
        `${API_ENDPOINTS.PRODUCTS}${API_ENDPOINTS.SEARCH}${searchTerm}&limit=${PAGINATION_LIMIT}&skip=${skip}`,
    }),
    addUserOrder: builder.mutation({
      query: (orderData: UserOrderData) => ({
        url: `${API_ENDPOINTS.USERS}/add`,
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
