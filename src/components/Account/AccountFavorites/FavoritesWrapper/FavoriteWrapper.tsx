import React from "react";

import { useGetProductByIdQuery } from "../../../../services/shopApi";

import ProductCard from "../../../ProductCard/ProductCard";

type FavoriteWrapperProps = {
  id: string | number;
};

const FavoritesWrapper: React.FC<FavoriteWrapperProps> = ({ id }) => {
  const { data } = useGetProductByIdQuery(id);
  if (!data) return null;
  return <ProductCard product={data} isFavorite />;
};

export default React.memo(FavoritesWrapper);
