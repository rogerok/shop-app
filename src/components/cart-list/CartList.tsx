import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import React from "react";
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

const CartList = () => {
  const products = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} mt={4}>
      {products.map((product: Product) => (
        <StyledCard key={product.id}>
          <Box sx={{ display: "flex", width: "30% " }}>
            <StyledCardMedia component="img" image={product.thumbnail} />
            <Typography variant="h6" ml={2}>
              {product.title}
            </Typography>
          </Box>

          <StyledCardActions>
            <IconButton
              size="medium"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <Typography variant="h5" component="span">
              {product.quantity}
            </Typography>
            <IconButton
              size="medium"
              onClick={() => dispatch(addToCart(product))}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </StyledCardActions>

          <Typography
            variant="h4"
            sx={{ width: "15%", flexShrink: "0", flexGrow: "0" }}
          >
            ${Number(product.price) * product.quantity}
          </Typography>
        </StyledCard>
      ))}
    </Box>
  );
};

export default CartList;
