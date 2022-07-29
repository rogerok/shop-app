import React from "react";
import { Grid, Container, Box } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { selectCartItems } from "../../redux/cart/cartSlice";

import Accordion from "../common/Accordion/Accordion";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import OrderForm from "./OrderForm/OrderForm";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <Grid
      container
      spacing={6}
      mt={2}
      p={2}
      component="section"
      alignItems="baseline"
    >
      <Grid item xs={8}>
        <Accordion title="Cart">
          <CartList cartItems={cartItems} />
        </Accordion>
      </Grid>
      <Grid container item spacing={4} xs={4}>
        <Container>
          <Box mb={4}>
            <CartTotal />
          </Box>
          <Box>
            <OrderForm cartItems={cartItems} />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
export default Cart;
