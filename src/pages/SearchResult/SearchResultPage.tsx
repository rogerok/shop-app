import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Backdrop from "../../components/common/Backdrop/Backdrop";

import ProductsCollection from "../../components/ProductsCollection/ProductsCollection";
import { useSearchProductsQuery } from "../../services/shopServices/shopApi";

const SearchResultPage = () => {
  const { searchTerm } = useParams();

  const { data, isLoading } = useSearchProductsQuery(searchTerm!);

  return isLoading ? <Backdrop /> : <ProductsCollection data={data!} />;
};

export default SearchResultPage;
