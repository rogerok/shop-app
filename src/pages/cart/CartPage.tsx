import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CartTotal from "../../components/cart-total/CartTotal";
import CartList from "../../components/cart-list/CartList";
import OrderForm from "../../components/order-form/OrderForm";

const CartPage = () => (
  <Grid
    container
    spacing={6}
    mt={2}
    p={2}
    component="section"
    sx={{ justifyContent: "space-between" }}
  >
    <Grid item xs={12}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" mb={4}>
            Корзина
          </Typography>
        </AccordionSummary>
        <Divider />
        <Paper elevation={3} sx={{ p: 3 }}>
          <AccordionDetails>
            <CartList />
          </AccordionDetails>
        </Paper>
      </Accordion>
    </Grid>
    <Grid container item spacing={4} xs={12}>
      <Grid item xs={6}>
        <OrderForm />
      </Grid>
      <Grid item xs={6}>
        <CartTotal />
      </Grid>
    </Grid>
  </Grid>
);

export default CartPage;
