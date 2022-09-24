import React, { useEffect, useMemo } from "react";
import {
  selectTotalSum,
  selectTotalQuantity,
  getTotalSum,
} from "../redux/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "./redux";

type TotalData = {
  type: string;
  total: number;
  description: string;
}[];

const useGetTotal = (options: string[]): TotalData => {
  const dispatch = useAppDispatch();
  const totalSum = useAppSelector(selectTotalSum);
  const totalQuantity = useAppSelector(selectTotalQuantity);

  const data = useMemo(
    () =>
      options.map((option) => ({
        type: option,
        total: option === "sum" ? totalSum : totalQuantity,
        description: option === "sum" ? "Amount" : "Products",
      })),
    [totalSum, totalQuantity]
  );

  useEffect(() => {
    dispatch(getTotalSum());
  }, [totalQuantity]);

  return data;
};

export default useGetTotal;
