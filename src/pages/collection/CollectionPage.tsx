import React from "react";

import { useParams } from "react-router-dom";
import { Box, Container, Grid, Stack } from "@mui/material";
import Pagination from "../../components/common/Pagination/Pagination";
import ProductsCollection from "../../components/ProductsCollection/ProductsCollection";

import { useGetProductsByCategoryQuery } from "../../services/shopServices/shopApi";
import Backdrop from "../../components/common/Backdrop/Backdrop";

const CollectionPage = () => {
  const { category } = useParams();
  const { data, isLoading, isFetching } = useGetProductsByCategoryQuery(
    category!
  );

  return isLoading ? (
    <Backdrop />
  ) : (
    <Container>
      <ProductsCollection data={data!.products} title={category!} isFetching />
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination />
      </Box>
    </Container>
  );
};
export default CollectionPage;
