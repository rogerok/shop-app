import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { Product, Products } from "../../ts/types";

import ProductCard from "../common/ProductCard/ProductCard";

type ProductsCollectionProps = {
  data: Products;
};

const ProductsCollection: FC<ProductsCollectionProps> = ({ data }) => {
  const { category } = useParams();

  return (
    <Grid container spacing={4} component="section">
      <Grid item xs={12}>
        <Typography variant="h3" align="center" mt={3} mb={3}>
          {category?.toUpperCase()}
        </Typography>
      </Grid>
      <Grid
        container
        xs={12}
        spacing={4}
        component="ul"
        sx={{ listStyleType: "none" }}
      >
        {data?.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductsCollection;
