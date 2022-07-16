import React from "react";

import { Box, Container, Grid } from "@mui/material";

import CartTotal from "../../components/Cart/CartTotal/CartTotal";
import CartList from "../../components/Cart/CartList/CartList";
import OrderForm from "../../components/Cart/OrderForm/OrderForm";
import Accordion from "../../components/common/Accordion/Accordion";

const CartPage = () => (
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
        <CartList />
      </Accordion>
    </Grid>
    <Grid container item spacing={4} xs={4}>
      <Container>
        <Box mb={4}>
          <CartTotal />
        </Box>
        <Box>
          <OrderForm />
        </Box>
      </Container>
    </Grid>
  </Grid>
);

export default CartPage;
