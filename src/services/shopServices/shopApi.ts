import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "../../interfaces/types";
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
  }),
});

export const { useGetProductsByCategoryQuery } = shopApi;
