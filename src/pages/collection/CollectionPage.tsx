import React, { useEffect } from "react";
import { Box, Grid, Paper } from "@mui/material";

import { useParams } from "react-router-dom";
import ProductsCollection from "../../components/products-collection/ProductsCollection";
import { useAppDispatch } from "../../hooks/redux";
import { setSidebarOpen } from "../../redux/sidebar/sidebarSlice";
import { useGetProductsByCategoryQuery } from "../../services/shopServices/shopApi";

const CollectionPage = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const { products } = useGetProductsByCategoryQuery(category!).data! ?? [];

  useEffect(() => {
    dispatch(setSidebarOpen(false));
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper elevation={3}>filters</Paper>
      </Grid>
      <Grid item xs={9} component="section">
        <ProductsCollection data={products} />
      </Grid>
    </Grid>
  );
};
export default CollectionPage;
