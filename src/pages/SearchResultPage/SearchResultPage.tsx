import React from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import FullScreenLoader from "../../components/common/FullScreenLoader/FullScreenLoader";
import Pagination from "../../components/common/Pagination/Pagination";
import ProductsCollection from "../../components/ProductsCollection/ProductsCollection";
import { useAppSelector } from "../../hooks/redux";
import { selectSkippedProducts } from "../../redux/pagination/paginationSlice";
import { useSearchProductsQuery } from "../../services/shopApi";
import { selectFavorites } from "../../redux/user/userSlice";

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const skippedProducts = useAppSelector(selectSkippedProducts);
  const favorites = useAppSelector(selectFavorites);

  const { data, isLoading } = useSearchProductsQuery({
    searchTerm: searchTerm || "",
    skip: skippedProducts,
  });

  if (isLoading || !data) return <FullScreenLoader />;

  return (
    <Container>
      <ProductsCollection
        data={data.products}
        title="Search results"
        favorites={favorites}
      />
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination total={data?.total} />
      </Box>
    </Container>
  );
};

export default SearchResultPage;
