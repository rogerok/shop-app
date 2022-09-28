import React from "react";
import { Grid, Box } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { selectSkippedProducts } from "../../../redux/pagination/paginationSlice";
import { selectFavorites } from "../../../redux/user/userSlice";
import { useGetProductsQuery } from "../../../services/shopApi";

import { ProductType } from "../../../ts/ProductsTypes";

import Spinner from "../../common/Spinner/Spinner";
import ProductCard from "../../ProductCard/ProductCard";
import Pagination from "../../common/Pagination/Pagination";

const ProductsGrid = ({ carouselRef }: { carouselRef: any }) => {
  const skippedProducts = useAppSelector(selectSkippedProducts);
  const { data, isLoading, isFetching } = useGetProductsQuery(skippedProducts);
  const favorites = useAppSelector(selectFavorites);

  return (
    <Grid container item xs={10} spacing={4}>
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
          <ProductCard
            product={product}
            key={product.id}
            isFavorite={!!favorites[product.id]}
          />
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
