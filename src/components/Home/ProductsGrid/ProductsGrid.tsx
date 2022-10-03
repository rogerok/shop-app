import React from "react";
import { Grid, Box } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { useGetProductsQuery } from "../../../services/shopApi";
import { selectFavorites } from "../../../store/user/userSlice";
import { selectSkippedProducts } from "../../../store/pagination/paginationSlice";
import { ProductType } from "../../../ts/ProductsTypes";

import Spinner from "../../common/Spinner/Spinner";
import ProductCard from "../../ProductCard/ProductCard";
import Pagination from "../../common/Pagination/Pagination";

const ProductsGrid = ({ carouselRef }: { carouselRef: any }) => {
  const skippedProducts = useAppSelector(selectSkippedProducts);
  const { data, isLoading, isFetching } = useGetProductsQuery(skippedProducts);
  const favorites = useAppSelector(selectFavorites);

  return (
    <Grid container item xl={12} xs={12} md={12} sm={12} spacing={4}>
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
