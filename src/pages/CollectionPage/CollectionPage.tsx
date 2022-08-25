import React from "react";

import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Pagination from "../../components/common/Pagination/Pagination";
import ProductsCollection from "../../components/ProductsCollection/ProductsCollection";

import { useGetProductsByCategoryQuery } from "../../services/shopApi";
import Backdrop from "../../components/common/Backdrop/Backdrop";
import { useAppSelector } from "../../hooks/redux";
import { selectSkippedProducts } from "../../redux/pagination/paginationSlice";

const CollectionPage = () => {
  const { category } = useParams();
  const skippedProducts = useAppSelector(selectSkippedProducts);
  const { data, isLoading } = useGetProductsByCategoryQuery({
    category: category || "",
    skip: skippedProducts,
  });

  if (isLoading || !data) return <Backdrop />;

  return (
    <Container>
      <ProductsCollection data={data?.products} title={category!} />
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination total={data?.total} />
      </Box>
    </Container>
  );
};
export default CollectionPage;
/*  return isLoading ? (
    <Backdrop />
  ) : (
    <Container>
      {data && <ProductsCollection data={data?.products} title={category!} />}
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination total={data?.total} />
      </Box>
    </Container>
  ); */
