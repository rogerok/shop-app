import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Products } from "../../ts/types";
import { SHOP_API } from "../../utils/API";
import { PAGINATION_LIMIT } from "../../utils/constants/PAGINATION_LIMIT";

export type ProductsRespone = {
  limit: number;
  products: Products;
  skip: number;
  total: number;
};

export const shopApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: SHOP_API.URL }),

  endpoints: (builder) => ({
    getProductsByCategory: builder.query<ProductsRespone, string>({
      query: (category) =>
        `${SHOP_API.PRODUCTS}/${SHOP_API.CATEGORY}/${category}`,
      /*       transformResponse: (result: ProductsRespone) => result.products, */
    }),
    getProductById: builder.query<Product, string | number>({
      query: (id) => `${SHOP_API.PRODUCTS}/${id}`,
    }),
    getProducts: builder.query<ProductsRespone, number>({
      query: (skip) =>
        `${SHOP_API.PRODUCTS}?limit=${PAGINATION_LIMIT}&skip=${skip}`,
      /*       transformResponse: (result: ProductsRespone) => result.products, */
    }),
    searchProductsForPreview: builder.query<Products, string>({
      query: (searchQuery) =>
        searchQuery &&
        `${SHOP_API.PRODUCTS}${SHOP_API.SEARCH}${searchQuery}&select=title,price,thumbnail`,
      transformResponse: (result: ProductsRespone) => result.products,
    }),
    searchProducts: builder.query<Products, string>({
      query: (searchQuery) =>
        searchQuery && `${SHOP_API.PRODUCTS}${SHOP_API.SEARCH}${searchQuery}`,
      transformResponse: (result: ProductsRespone) => result.products,
    }),
    addUserOrder: builder.mutation({
      query: (orderData) => ({
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
