import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useGetProductsByCategoryQuery } from "../../services/shopServices/shopApi";
import { Product } from "../../interfaces/types";

const ProductsCollection = () => {
  const { category } = useParams();
  const { data } = useGetProductsByCategoryQuery(category!);

  return (
    <Grid item xs={8} component="section">
      <Typography variant="h3" align="center" mt={3} mb={3}>
        {category?.toUpperCase()}
      </Typography>
      <Container sx={{ mt: 3 }}>
        <Grid
          container
          spacing={6}
          component="ul"
          sx={{ listStyleType: "none" }}
        >
          {data?.products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default ProductsCollection;
