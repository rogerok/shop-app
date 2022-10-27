import React from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Link as RouterLink } from "react-router-dom";
import { RoutesNames } from "../../../../router/routes";
import { useAppSelector } from "../../../../hooks/redux";
import {
  selectFavoritesThumbnails,
  selectFavoritesKeys,
} from "../../../../store/user/userSlice";

import { StyledPaper } from "../../Account.styles";
import { StyledAvatarGroup } from "./Favorites.styles";

const Favorites = () => {
  const totalFavorites = useAppSelector(selectFavoritesKeys).length;
  const thumbnails = [...useAppSelector(selectFavoritesThumbnails)];

  return (
    <StyledPaper>
      <Link
        to={`/${RoutesNames.ACCOUNT_PAGE}/${RoutesNames.ACCOUNT_FAVORITES}`}
        component={RouterLink}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt={3}
          height="100%"
          maxWidth="100%"
        >
          <Box display="flex" alignItems="center" mb={1}>
            <Typography variant="h5">Favorites</Typography>
            <FavoriteIcon color="secondary" />
          </Box>

          <StyledAvatarGroup max={4} total={totalFavorites}>
            {thumbnails.length &&
              thumbnails.map((thumbnail) => (
                <Avatar src={thumbnail} alt="product image" key={thumbnail} />
              ))}
          </StyledAvatarGroup>
        </Box>
      </Link>
    </StyledPaper>
  );
};

export default Favorites;
