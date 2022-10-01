import React from "react";
import { Box, Container } from "@mui/material";

import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useGetProductsByCategoryQuery } from "../../services/shopApi";
import { selectSkippedProducts } from "../../store/pagination/paginationSlice";
import { selectFavorites } from "../../store/user/userSlice";

import FullScreenLoader from "../common/FullScreenLoader/FullScreenLoader";
import ProductsCollection from "../ProductsCollection/ProductsCollection";

const Pagination = React.lazy(() => import("../common/Pagination/Pagination"));

const Collection = () => {
  const { category } = useParams();
  const skippedProducts = useAppSelector(selectSkippedProducts);
  const { data, isLoading } = useGetProductsByCategoryQuery({
    category: category || "",
    skip: skippedProducts,
  });

  const favorites = useAppSelector(selectFavorites);

  if (isLoading || !data) return <FullScreenLoader />;

  return (
    <Container>
      <ProductsCollection
        data={data?.products}
        title={category!}
        favorites={favorites}
      />
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination total={data?.total} />
      </Box>
    </Container>
  );
};
export default Collection;
