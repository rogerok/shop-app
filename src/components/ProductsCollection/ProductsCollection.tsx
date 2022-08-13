import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import { ProductType, ProductsType } from "../../ts/types";
import ProductCard from "../ProductCard/ProductCard";

type ProductsCollectionProps = {
  data: ProductsType;
  title: string;
};

const ProductsCollection: React.FC<ProductsCollectionProps> = ({
  data,
  title,
}) => (
  <Container>
    <Grid container spacing={4} component="section">
      <Grid item xs={12}>
        <Typography variant="h3" align="center" mt={3} mb={3}>
          {title.toUpperCase()}
        </Typography>
      </Grid>
      <Grid container spacing={4} component="ul" sx={{ listStyleType: "none" }}>
        {data?.map((product: ProductType) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Grid>
  </Container>
);

export default ProductsCollection;
