import { Divider, Grid, Paper, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import CartTotal from "../../components/cart-total/CartTotal";
import CartList from "../../components/cart-list/CartList";

const Cart = () => (
  <Grid container spacing={8} mt={4} p={4} component="section">
    <Grid item xs={8}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" mb={4}>
          Корзина
        </Typography>
        <Divider />
        <CartList />
      </Paper>
    </Grid>
    <CartTotal />
  </Grid>
);

export default Cart;
