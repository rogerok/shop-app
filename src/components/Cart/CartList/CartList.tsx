import React from "react";

import { Box, Typography } from "@mui/material";

import { CartProduct } from "../../../ts/types";

import CartListItem from "../CartListItem/CartListItem";

type CartListProps = {
  cartItems: CartProduct[];
};

const EmptyCart = () => (
  <Typography variant="h6" paragraph>
    Your cart is empty
  </Typography>
);

const CartList: React.FC<CartListProps> = ({ cartItems }) => (
  <Box mt={4} display="flex" flexDirection="column">
    {cartItems.length ? (
      cartItems.map((product: CartProduct) => (
        <CartListItem product={product} key={product.id} />
      ))
    ) : (
      <EmptyCart />
    )}
  </Box>
);

export default CartList;
