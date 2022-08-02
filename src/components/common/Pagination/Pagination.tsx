import React, { ChangeEvent } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setSkippedProducts,
  selectTotalPages,
  selectProductsPerPage,
} from "../../../redux/pagination/paginationSlice";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(selectTotalPages);
  const productsPerPage = useAppSelector(selectProductsPerPage);

  const handlePaginationChange = (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setSkippedProducts(value * productsPerPage));
  };

  return (
    <MuiPagination
      count={totalPages}
      onChange={handlePaginationChange}
      color="secondary"
      shape="rounded"
      size="large"
    />
  );
};

export default Pagination;
