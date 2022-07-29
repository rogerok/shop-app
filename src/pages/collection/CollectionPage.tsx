import React from "react";

import { useParams } from "react-router-dom";
import ProductsCollection from "../../components/ProductsCollection/ProductsCollection";

import { useGetProductsByCategoryQuery } from "../../services/shopServices/shopApi";
import Backdrop from "../../components/common/Backdrop/Backdrop";

const CollectionPage = () => {
  const { category } = useParams();
  const { data, isLoading } = useGetProductsByCategoryQuery(category!);

  return isLoading ? (
    <Backdrop />
  ) : (
    <ProductsCollection data={data!} title={category!} />
  );
};
export default CollectionPage;
