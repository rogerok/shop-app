import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { selectFavoritesIds } from "../../../redux/user/userSlice";

import FavoritesWrapper from "./FavoritesWrapper/FavoriteWrapper";

import { StyledPaper } from "../Account.styles";

const AccountFavorites = () => {
  const ids = useAppSelector(selectFavoritesIds);
  console.log(ids);
  return (
    <StyledPaper>
      {ids.map((id) => (
        <FavoritesWrapper key={id} id={id} />
      ))}
    </StyledPaper>
  );
};

export default AccountFavorites;
