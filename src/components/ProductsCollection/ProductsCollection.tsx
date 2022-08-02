import React, { FC } from "react";
import { Container, Grid, Typography } from "@mui/material";

import { Product, Products } from "../../ts/types";
import Pagination from "../common/Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../common/Spinner/Spinner";

type ProductsCollectionProps = {
  data: Products;
  title: string;
  isFetching: boolean;
};

const ProductsCollection: FC<ProductsCollectionProps> = ({
  data,
  title,
  isFetching,
}) => {
  const num = 0;
  return (
    <Container>
      <Grid container spacing={4} component="section">
        <Grid item xs={12}>
          <Typography variant="h3" align="center" mt={3} mb={3}>
            {title.toUpperCase()}
          </Typography>
        </Grid>
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
      </Grid>
    </Container>
  );
};

export default ProductsCollection;
