import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useGetProductsForHomePageQuery } from "../../services/shopServices/shopApi";
import Backdrop from "../../components/common/Backdrop/Backdrop";
import { Product } from "../../ts/types";
import ProductCard from "../../components/ProductCard/ProductCard";

const HomePage = () => {
  const { data, isLoading } = useGetProductsForHomePageQuery(15);

  return isLoading ? (
    <Backdrop />
  ) : (
    <Grid container pt={10} pb={10} spacing={6} justifyContent="center">
      <Grid item xs={10}>
        <Paper
          elevation={3}
          sx={{
            backgroundImage: `linear-gradient(
    to right,
    rgb(203, 17, 171) 0px,
    rgb(72, 17, 115) 100%
  )`,
            pt: 2,
            pb: 2,
          }}
        >
          <Typography
            align="center"
            variant="h1"
            color="primary.light"
            gutterBottom
            sx={{ margin: "auto" }}
          >
            WELCOME TO CHERRYBERRIES
          </Typography>
        </Paper>
      </Grid>

      <Grid
        container
        item
        xs={12}
        spacing={4}
        component="ul"
        sx={{ listStyleType: "none", margin: "0 auto" }}
      >
        {data?.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default HomePage;
