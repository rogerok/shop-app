import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Products } from "../../interfaces/types";
import { SHOP_API } from "../../utils/api-consts";

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
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `${SHOP_API.PRODUCTS}/${id}`,
    }),
    searchProducts: builder.query<Products, string>({
      query: (searchQuery) =>
        searchQuery &&
        `${SHOP_API.PRODUCTS}${SHOP_API.SEARCH}${searchQuery}&select=title,price,thumbnail`,
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
  useSearchProductsQuery,
  useAddUserOrderMutation,
} = shopApi;
