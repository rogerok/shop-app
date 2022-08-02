import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsRespone, shopApi } from "../../services/shopServices/shopApi";
import { PAGINATION_LIMIT } from "../../utils/constants/PAGINATION_LIMIT";

interface PaginationState {
  skippedProducts: number;
  paginationTotalPages: number;
  productsPerPage: number;
}

const initialState: PaginationState = {
  skippedProducts: 0,
  paginationTotalPages: 0,
  productsPerPage: PAGINATION_LIMIT,
};

const setLimit = (
  state: PaginationState,
  action: PayloadAction<ProductsRespone>
) => {
  state.paginationTotalPages = Math.round(
    Number(action.payload?.total) / state.productsPerPage
  );
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setSkippedProducts(state: PaginationState, action: PayloadAction<number>) {
      state.skippedProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      shopApi.endpoints.getProductsByCategory.matchFulfilled,
      setLimit
    );
    builder.addMatcher(shopApi.endpoints.getProducts.matchFulfilled, setLimit);
  },
});

export const selectPaginationState = ({
  pagination,
}: {
  pagination: PaginationState;
}) => pagination;

export const selectSkippedProducts = ({
  pagination,
}: {
  pagination: PaginationState;
}) => pagination.skippedProducts;
export const selectTotalPages = ({
  pagination,
}: {
  pagination: PaginationState;
}) => pagination.paginationTotalPages;
export const selectProductsPerPage = ({
  pagination,
}: {
  pagination: PaginationState;
}) => pagination.productsPerPage;
export const { setSkippedProducts } = paginationSlice.actions;
export default paginationSlice.reducer;
