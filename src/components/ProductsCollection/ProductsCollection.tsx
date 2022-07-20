import React, { FC, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { Product, Products } from "../../ts/types";

import ProductCard from "../ProductCard/ProductCard";

type ProductsCollectionProps = {
  data: Products;
};

const ProductsCollection: FC<ProductsCollectionProps> = ({ data }) => {
  const { category } = useParams();

  return (
    <>
      <Typography variant="h3" align="center" mt={3} mb={3}>
        {category?.toUpperCase()}
      </Typography>
      <Container sx={{ mt: 3 }} maxWidth="xl">
        <Grid
          container
          spacing={4}
          component="ul"
          sx={{ listStyleType: "none" }}
        >
          {data?.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductsCollection;
