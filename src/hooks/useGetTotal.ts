import React, { useEffect } from "react";
import {
  selectTotalSum,
  selectTotalQuantity,
  getTotalSum,
} from "../redux/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "./redux";

type TotalType = {
  type: "sum" | "quantity";
  total: number;
};

const useGetTotal = () => {
  const dispatch = useAppDispatch();
  const totalSum = useAppSelector(selectTotalSum);
  const totalQuantity = useAppSelector(selectTotalQuantity);

  const data: TotalType[] = [
    {
      type: "sum",
      total: totalSum,
    },
    { type: "quantity", total: totalQuantity },
  ];

  const getDescription = (unit: TotalType) => {
    if (unit.type === "sum") return "Amount:";
    return "Products:";
  };

  useEffect(() => {
    dispatch(getTotalSum());
  }, [totalQuantity]);

  return { data, getDescription };
};

export default useGetTotal;
