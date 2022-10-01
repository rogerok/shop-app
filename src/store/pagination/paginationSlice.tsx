import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PAGINATION_LIMIT } from "../../utils/constants/PAGINATION_LIMIT";

interface PaginationState {
  previousValue: number;
  skippedProducts: number;
  paginationTotalPages: number;
  productsPerPage: number;
}

const initialState: PaginationState = {
  previousValue: 0,
  skippedProducts: 0,
  paginationTotalPages: 0,
  productsPerPage: PAGINATION_LIMIT,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setSkippedProducts(state: PaginationState, action: PayloadAction<number>) {
      state.skippedProducts = action.payload;

      if (
        state.previousValue === 0 &&
        state.skippedProducts === PAGINATION_LIMIT
      )
        state.previousValue = PAGINATION_LIMIT;
    },
    clearPaginationState() {
      return initialState;
    },
  },
});

export const selectPreviousValue = ({
  pagination,
}: {
  pagination: PaginationState;
}) => pagination.previousValue;

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

export const selectProductsPerPage = ({
  pagination,
}: {
  pagination: PaginationState;
}) => pagination.productsPerPage;

export const { setSkippedProducts, clearPaginationState } =
  paginationSlice.actions;
export default paginationSlice.reducer;
