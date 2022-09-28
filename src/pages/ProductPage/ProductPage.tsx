import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/shopApi";
import FullScreenLoader from "../../components/common/FullScreenLoader/FullScreenLoader";
import Product from "../../components/Product/Product";

const ProductPage = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(productId!) ?? [];
  if (isLoading || !data) return <FullScreenLoader />;
  return <Product data={data} />;
};

export default ProductPage;
