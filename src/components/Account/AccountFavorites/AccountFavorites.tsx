import React, { useState } from "react";
import { Grid, Typography, Container } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import {
  selectFavoritesKeysByInterval,
  selectFavoritesKeys,
} from "../../../store/user/userSlice";
import { shopApi } from "../../../services/shopApi";

import Button from "../../common/Button/Button";
import FavoritesWrapper from "./FavoritesWrapper/FavoriteWrapper";
import FullScreenLoader from "../../common/FullScreenLoader/FullScreenLoader";

// Здесь получение данных с сервера выглядит таким образом т.к. на сервере отсуствует пагинация

const AccountFavorites = () => {
  const [interval, setInterval] = useState(6);

  const ids = useAppSelector((state) =>
    selectFavoritesKeysByInterval(state, interval)
  );
  const isEnd = ids.length === useAppSelector(selectFavoritesKeys).length;
  const initialLoading = useAppSelector(
    shopApi.endpoints.getProductById.select(ids[0])
  ).isLoading;
  const { isLoading } = useAppSelector(
    shopApi.endpoints.getProductById.select(ids[ids.length - 1])
  );

  const loadMore = () => {
    setInterval(() => interval + 6);
  };

  if (initialLoading) return <FullScreenLoader />;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h1" textAlign="center" mb={8}>
        Your favorites products
      </Typography>
      {ids.length ? (
        <>
          <Grid container component="ul" spacing={4} mb={4}>
            {ids.map((id) => (
              <FavoritesWrapper key={id} id={id} />
            ))}
          </Grid>
          <Button
            onClick={loadMore}
            sx={{ margin: "0 auto", width: "30%" }}
            disabled={isEnd}
          >
            {isLoading ? "loading..." : "load more"}
          </Button>
        </>
      ) : (
        <Typography variant="h3" textAlign="center">
          List is empty ;(
        </Typography>
      )}
    </Container>
  );
};

export default AccountFavorites;
