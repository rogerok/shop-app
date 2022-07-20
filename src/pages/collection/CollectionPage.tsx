import React, { useEffect } from "react";
import { Grid, Paper } from "@mui/material";

import { useParams } from "react-router-dom";
import ProductsCollection from "../../components/ProductsCollection/ProductsCollection";
import { useAppDispatch } from "../../hooks/redux";
import { setSidebarOpen } from "../../redux/sidebar/sidebarSlice";
import { useGetProductsByCategoryQuery } from "../../services/shopServices/shopApi";
import { Products } from "../../ts/types";
import Backdrop from "../../components/common/Backdrop/Backdrop";

const CollectionPage = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const { data, isLoading } = useGetProductsByCategoryQuery(
    category!
  ); /* ?? [] */

  return isLoading ? (
    <Backdrop />
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper elevation={3}>filters</Paper>
      </Grid>
      <Grid item xs={9} component="section">
        <ProductsCollection data={data!} />
      </Grid>
    </Grid>
  );
};
export default CollectionPage;
