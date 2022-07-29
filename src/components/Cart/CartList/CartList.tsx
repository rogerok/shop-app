import React, { FC } from "react";

import { Box, Typography } from "@mui/material";

import { CartProduct, Product } from "../../../ts/types";
import { useAppSelector } from "../../../hooks/redux";
import { selectCartItems } from "../../../redux/cart/cartSlice";
import CartListItem from "./CartListItem";

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
