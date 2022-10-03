import React from "react";

import { Typography, IconButton, Grid, Card } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { useAppDispatch } from "../../../hooks/redux";
import { removeFromCart, addToCart } from "../../../store/cart/cartSlice";
import { CartProductType } from "../../../ts/ProductsTypes";

import { StyledCard, StyledCardActions } from "./CartListItem.styles";
import ListItemContent from "../ListItemContent/ListItemContent";

type CartListItemProps = {
  product: CartProductType;
};

const CartListItem: React.FC<CartListItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { id, thumbnail, title, quantity, price } = product;

  const handleIncreaseQuantity = () => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card sx={{ mb: 4 }}>
      <Grid container alignItems="center" justifyContent="space-between" p={2}>
        <Grid item lg={4} md={5}>
          <ListItemContent id={id} title={title} thumbnail={thumbnail} />
        </Grid>
        <Grid item lg={4} md={3}>
          <StyledCardActions>
            <IconButton size="medium" onClick={handleDecreaseQuantity}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <Typography variant="h5" component="span">
              {quantity}
            </Typography>
            <IconButton size="medium" onClick={handleIncreaseQuantity}>
              <AddCircleOutlineIcon />
            </IconButton>
          </StyledCardActions>
        </Grid>
        <Grid item lg={4} md={3}>
          <Typography variant="h4">${Number(price) * quantity}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default React.memo(CartListItem);
