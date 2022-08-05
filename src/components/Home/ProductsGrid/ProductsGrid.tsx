import React from "react";
import { Grid, Box } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import { selectSkippedProducts } from "../../../redux/pagination/paginationSlice";
import { useGetProductsQuery } from "../../../services/shopServices/shopApi";
import { ProductType } from "../../../ts/types";
import Spinner from "../../common/Spinner/Spinner";
import ProductCard from "../../ProductCard/ProductCard";
import Pagination from "../../common/Pagination/Pagination";

const ProductsGrid = ({ carouselRef }: { carouselRef: any }) => {
  const skippedProducts = useAppSelector(selectSkippedProducts);
  const { data, isLoading, isFetching } = useGetProductsQuery(skippedProducts);

  return (
    <Grid container item xs={9} spacing={4}>
      {isFetching || isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Spinner />
        </Box>
      ) : (
        data?.products.map((product: ProductType) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
      <Grid
        item
        xs={9}
        display="flex"
        justifyContent="center"
        mx="auto"
        alignItems="flexEnd"
      >
        <Pagination scrollToRef={carouselRef} total={data?.total} />
      </Grid>
    </Grid>
  );
};

export default ProductsGrid;
