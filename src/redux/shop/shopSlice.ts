import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ProductsType, ProductType } from "../../ts/types";

import { ProductsRespone, shopApi } from "../../services/shopServices/shopApi";
import { SHOP_API as API } from "../../utils/API";

interface ShopState extends EntityState<ProductType> {
  entities: {};
}

const shopAdapter = createEntityAdapter<ProductType>({
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = shopAdapter.getInitialState();

export const extendedShopSlice = shopApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<EntityState<ProductType>, string>({
      query: (category) => `${API.PRODUCTS}/${API.CATEGORY}/${category}`,
      transformResponse: (responseData: ProductsRespone) =>
        shopAdapter.addMany(initialState, responseData.products),
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
