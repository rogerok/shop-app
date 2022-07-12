import React, { FC } from "react";

import { Box, Typography } from "@mui/material";

import { CartProduct, Product } from "../../../ts/types";
import { useAppSelector } from "../../../hooks/redux";
import { selectCartItems } from "../../../redux/cart/cartSlice";
import CartListItem from "./CartListItem";

const EmptyCart = () => (
  <Typography variant="h6" paragraph>
    Ваша корзина пуста
  </Typography>
);

const CartList = () => {
  const products = useAppSelector(selectCartItems);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} mt={4}>
      {products.length ? (
        products.map((product: CartProduct) => (
          <CartListItem product={product} key={product.id} />
        ))
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default CartList;
