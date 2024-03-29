import React from "react";

import { Box, Typography } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { selectCartItems } from "../../../store/cart/cartSlice";
import { CartProductType } from "../../../ts/ProductsTypes";

import CartListItem from "../CartListItem/CartListItem";

const EmptyCart = () => (
  <Typography variant="h6" paragraph>
    Your cart is empty
  </Typography>
);

const CartList = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <Box my={4} display="flex" flexDirection="column">
      {cartItems.length ? (
        cartItems.map((product: CartProductType) => (
          <CartListItem product={product} key={product.id} />
        ))
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default CartList;
