import React from "react";

import { Box, Typography } from "@mui/material";

import { CartProductType } from "../../../ts/types";

import CartListItem from "../CartListItem/CartListItem";
import { useAppSelector } from "../../../hooks/redux";
import { selectCartItems } from "../../../redux/cart/cartSlice";

const EmptyCart = () => (
  <Typography variant="h6" paragraph>
    Your cart is empty
  </Typography>
);

const CartList = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <Box mt={4} display="flex" flexDirection="column">
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
