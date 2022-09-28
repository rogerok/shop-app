import React from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link as RouterLink } from "react-router-dom";
import { RoutesNames } from "../../../../router/routes";

import { useAppSelector } from "../../../../hooks/redux";
import {
  selectFavoritesThumbnails,
  selectFavoritesKeys,
} from "../../../../redux/user/userSlice";
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
          alignItems="flex-start"
          p={2}
        >
          <Typography variant="h5">
            Favorites
            <FavoriteIcon color="secondary" />
          </Typography>

          <StyledAvatarGroup max={6} total={totalFavorites}>
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
