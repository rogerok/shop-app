import React, { useEffect } from "react";
import { Grid, Paper } from "@mui/material";

import ProductsCollection from "../../components/products-collection/ProductsCollection";
import { useAppDispatch } from "../../hooks/redux";
import { setSidebarOpen } from "../../redux/sidebar/sidebarSlice";

const CollectionPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSidebarOpen(false));
  });
  return (
    <Grid container>
      <Grid item xs={3}>
        <Paper elevation={3}>filters</Paper>
      </Grid>
      <ProductsCollection />
    </Grid>
  );
};
export default CollectionPage;
