import React, { useEffect, useRef } from "react";
import { Grid, Box } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import { selectSkippedProducts } from "../../../redux/pagination/paginationSlice";
import { useGetProductsQuery } from "../../../services/shopServices/shopApi";
import { Product } from "../../../ts/types";
import Spinner from "../../common/Spinner/Spinner";
import ProductCard from "../../ProductCard/ProductCard";
import Pagination from "../../common/Pagination/Pagination";

const ProductsGrid = ({ carouselRef }: { carouselRef: any }) => {
  const skippedProducts = useAppSelector(selectSkippedProducts);
  const { data, isLoading, isFetching } = useGetProductsQuery(skippedProducts);
  const targetRef = useRef<any>(null);

  return (
    <Grid container item xs={9} spacing={4} ref={targetRef}>
      {isFetching ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Spinner />
        </Box>
      ) : (
        data?.products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
      <Grid item xs={9} display="flex" justifyContent="center" mx="auto">
        <Pagination scrollToRef={targetRef} />
      </Grid>
    </Grid>
  );
};

export default ProductsGrid;
