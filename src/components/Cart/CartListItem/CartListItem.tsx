import React from "react";

import { Typography, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { CartProductType } from "../../../ts/types";
import { useAppDispatch } from "../../../hooks/redux";
import { removeFromCart, addToCart } from "../../../redux/cart/cartSlice";

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
    <StyledCard key={id}>
      <ListItemContent id={id} title={title} thumbnail={thumbnail} />

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

      <Typography variant="h4" flexShrink="0" flexGrow="0" width="15%">
        ${Number(price) * quantity}
      </Typography>
    </StyledCard>
  );
};

export default React.memo(CartListItem);
