import React from "react";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { CartProduct } from "../../../ts/types";
import { useAppDispatch } from "../../../hooks/redux";
import { removeFromCart, addToCart } from "../../../redux/cart/cartSlice";

import {
  StyledCard,
  StyledCardMedia,
  StyledCardActions,
} from "./CartListItem.styles";

const CartListItem = ({ product }: { product: CartProduct }) => {
  const dispatch = useAppDispatch();
  const { id, thumbnail, title, quantity, price } = product;

  return (
    <StyledCard key={id}>
      <Box display="flex" alignItems="center" width="30%">
        <StyledCardMedia component="img" image={thumbnail} />
        <Typography variant="h6" ml={2}>
          {title}
        </Typography>
      </Box>

      <StyledCardActions>
        <IconButton size="medium" onClick={() => dispatch(removeFromCart(id))}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Typography variant="h5" component="span">
          {quantity}
        </Typography>
        <IconButton size="medium" onClick={() => dispatch(addToCart(product))}>
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
