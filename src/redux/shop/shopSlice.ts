import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Product, Products } from "../../interfaces/types";
import { ProductsRespone, shopApi } from "../../services/shopServices/shopApi";
import { SHOP_API } from "../../utils/api-consts";

const shopAdapter = createEntityAdapter<Product>({
  sortComparer: (a, b) => a.price - b.price,
});

const initialState = shopAdapter.getInitialState();

export const extendedShopSlice = shopApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<ProductsRespone, string>({
      query: (category) =>
        `${SHOP_API.PRODUCTS}/${SHOP_API.CATEGORY}/${category}`,
      // @ts-ignore
      transformResponse: (responseData: ProductsRespone) =>
        shopAdapter.setAll(initialState, responseData.products),
    }),
  }),
});

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
