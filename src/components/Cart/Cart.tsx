import React from "react";
import { Grid, Container, Box } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";

import Accordion from "../common/Accordion/Accordion";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";

const Cart = () => {
  const isUserLoggedIn = useAppSelector((state) => state.user.token);

  return (
    <Grid
      container
      spacing={4}
      mt={2}
      p={2}
      component="section"
      alignItems={{ lg: "baseline", md: "center" }}
      justifyContent={{ md: "center" }}
    >
      <Grid item xl={9} lg={9} md={12} sm={12} mb={4}>
        <Accordion title="Cart">
          <CartList />
        </Accordion>
      </Grid>
      <Grid container item spacing={4} lg={3} md={6} sm={12}>
        <Container>
          <Box mb={4} width="100%">
            <CartTotal />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
export default Cart;

<Grid
  container
  spacing={4}
  mt={2}
  p={2}
  component="section"
  alignItems="baseline"
>
  <Grid item lg={9} md={12} sm={12} mb={4}>
    <Accordion title="Cart">
      <CartList />
    </Accordion>
  </Grid>
  <Grid container item spacing={4} lg={3} md={6} sm={12}>
    <Container>
      <Box mb={4}>
        <CartTotal />
      </Box>
      {/*           {!isUserLoggedIn && (
            <Box>
              <OrderForm />
            </Box>
          )} */}
    </Container>
  </Grid>
</Grid>;
