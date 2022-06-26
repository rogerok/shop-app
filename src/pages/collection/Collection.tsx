import React from "react";
import { Grid, Paper } from "@mui/material";

import ProductsCollection from "../../components/products-collection/ProductsCollection";

const Collection = () => (
  <Grid container>
    <Grid item xs={3}>
      <Paper elevation={3}>filters</Paper>
    </Grid>
    <ProductsCollection />
  </Grid>
);
export default Collection;
