import { Box, Typography, IconButton } from "@mui/material";
import React, { FC } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { Product } from "../../interfaces/types";
import {
  selectCartItems,
  removeFromCart,
  addToCart,
} from "../../redux/cart/cartSlice";
import { StyledCardMedia, StyledCard, StyledCardActions } from "./styles";

const CartListItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const { id, thumbnail, title, quantity, price } = product;
  return (
    <StyledCard key={id}>
      <Box sx={{ display: "flex", width: "30% " }}>
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

      <Typography
        variant="h4"
        sx={{ width: "15%", flexShrink: "0", flexGrow: "0" }}
      >
        ${Number(price) * quantity}
      </Typography>
    </StyledCard>
  );
};

const CartListItemMemoized = React.memo(CartListItem);

const CartList = () => {
  const products = useAppSelector(selectCartItems);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} mt={4}>
      {products.map((product: Product) => (
        <CartListItemMemoized product={product} key={product.id} />
      ))}
    </Box>
  );
};

export default CartList;
