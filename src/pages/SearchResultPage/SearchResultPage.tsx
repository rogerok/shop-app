import React from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Backdrop from "../../components/common/Backdrop/Backdrop";
import Pagination from "../../components/common/Pagination/Pagination";
import ProductsCollection from "../../components/ProductsCollection/ProductsCollection";
import { useAppSelector } from "../../hooks/redux";
import { selectSkippedProducts } from "../../redux/pagination/paginationSlice";
import { useSearchProductsQuery } from "../../services/shopServices/shopApi";

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const skippedProducts = useAppSelector(selectSkippedProducts);

  const { data, isLoading } = useSearchProductsQuery({
    searchTerm: searchTerm || "",
    skip: skippedProducts,
  });

  if (isLoading || !data) return <Backdrop />;

  return (
    <Container>
      <ProductsCollection data={data.products} title="Search results" />
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination total={data?.total} />
      </Box>
    </Container>
  );
};

export default SearchResultPage;

/*   return isLoading ? (
    <Backdrop />
  ) : (
    <Container>
      <ProductsCollection data={data!.products} title="Search results" />
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination total={data?.total} />
      </Box>
    </Container>
  ); */
