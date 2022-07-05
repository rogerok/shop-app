import React, { FC } from "react";

import { Box } from "@mui/material";

import { CartProduct, Product } from "../../interfaces/types";
import { useAppSelector } from "../../hooks/redux";
import { selectCartItems } from "../../redux/cart/cartSlice";
import CartListItem from "./cart-list-item/CartListItem";

const CartList = () => {
  const products = useAppSelector(selectCartItems);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} mt={4}>
      {products.map((product: CartProduct) => (
        <CartListItem product={product} key={product.id} />
      ))}
    </Box>
  );
};

export default CartList;
