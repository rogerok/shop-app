import React from "react";
import { useAppSelector } from "../../../../hooks/redux";
import { selectFavoritesIds } from "../../../../redux/user/userSlice";
import { useGetProductThumbnailQuery } from "../../../../services/userApi";

type FavoriteWrapperProps = {
  id: string | number;
};

const FavoritesWrapper: React.FC<FavoriteWrapperProps> = ({ id }) => {
  const { data, isLoading } = useGetProductThumbnailQuery(id as string);
  console.log(data);
  return <div>FavoriteWrapper</div>;
};

export default FavoritesWrapper;
