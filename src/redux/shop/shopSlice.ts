import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Products, Product } from "../../ts/types";

import { ProductsRespone, shopApi } from "../../services/shopServices/shopApi";
import { SHOP_API } from "../../utils/api-consts";

const shopAdapter = createEntityAdapter<Products>();

const initialState = shopAdapter.getInitialState({});

export const extendedShopSlice = shopApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<Products, string>({
      query: (category) =>
        `${SHOP_API.PRODUCTS}/${SHOP_API.CATEGORY}/${category}`,
      transformResponse: (responseData: ProductsRespone) =>
        responseData.products,
    }),
  }),
});

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export const { useGetProductsByCategoryQuery } = extendedShopSlice;

export default shopSlice.reducer;
