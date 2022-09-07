import React from "react";
import { AvatarGroup, Avatar, Box /* Link */ } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
/* import { Link as RouterLink } from "react-router-dom";
 */ import Typography from "@mui/material/Typography";
import { RoutesNames } from "../../../../router/routes";

import { useAppSelector } from "../../../../hooks/redux";
import {
  selectFavorites,
  selectFavoritesThumbnails,
} from "../../../../redux/user/userSlice";
import Link from "../../../common/Link/Link";
import { Overlay, StyledPaper } from "../../Account.styles";

const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);
  const thumbnails = [...useAppSelector(selectFavoritesThumbnails)];

  return (
    <StyledPaper>
      <Link to={`/${RoutesNames.ACCOUNT_FAVORITES}`}>
        <Box
          display="flex"
          // flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
          p={4}
        >
          {/*         <Overlay>
          <Link to={`/${RoutesNames.ACCOUNT_FAVORITES}`}>
            Go to favorite &#160;
            <FavoriteIcon />
            </Link>
          </Overlay> */}
          <AvatarGroup total={Number(favorites.length)}>
            {thumbnails.length &&
              thumbnails.map((thumbnail) => (
                <Avatar src={thumbnail} alt="product image" key={thumbnail} />
              ))}
            {/*     <AvatarGroup src={thumbnails[0]} /> */}
          </AvatarGroup>
        </Box>
        <Typography variant="h6">Favorites</Typography>
        <FavoriteIcon />
      </Link>
    </StyledPaper>
  );
};

export default Favorites;
