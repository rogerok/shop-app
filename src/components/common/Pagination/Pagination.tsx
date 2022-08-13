import React, { ChangeEvent, useCallback, useEffect } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  selectProductsPerPage,
  setSkippedProducts,
} from "../../../redux/pagination/paginationSlice";

type PaginationProps = {
  scrollToRef?: any;
  total?: number | string;
};

const Pagination: React.FC<PaginationProps> = ({ scrollToRef, total }) => {
  const dispatch = useAppDispatch();
  const productsPerPage = useAppSelector(selectProductsPerPage);

  const totalPages = Math.round(Number(total) / productsPerPage);

  const handlePaginationChange = (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
    if (value === 1) {
      dispatch(setSkippedProducts(0));
      return;
    }
    dispatch(setSkippedProducts((value - 1) * productsPerPage));
    if (scrollToRef)
      scrollToRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  useEffect(() => {
    dispatch(setSkippedProducts(0));
  }, [totalPages]);

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
