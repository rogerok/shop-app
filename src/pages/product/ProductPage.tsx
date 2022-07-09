import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/shopServices/shopApi";

const ProductPage = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery(productId!);
  return <div className="">{productId}</div>;
};

export default ProductPage;
