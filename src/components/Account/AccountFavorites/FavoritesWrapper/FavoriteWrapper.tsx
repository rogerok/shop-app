import React from "react";
import { useAppSelector } from "../../../../hooks/redux";
import { selectFavoritesKeys } from "../../../../redux/user/userSlice";
import {
  useGetProductForPreviewQuery,
  useGetProductByIdQuery,
} from "../../../../services/shopApi";
import { useGetProductThumbnailQuery } from "../../../../services/userApi";

import ProductCard from "../../../ProductCard/ProductCard";

type FavoriteWrapperProps = {
  id: string | number;
};

const FavoritesWrapper: React.FC<FavoriteWrapperProps> = ({ id }) => {
  const { data, isLoading } = useGetProductByIdQuery(id);
  if (!data) return null;
  return <ProductCard product={data} isFavorite />;
};

export default React.memo(FavoritesWrapper);
