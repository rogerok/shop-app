import React from "react";

import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  Link,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Link as RouterLink } from "react-router-dom";
import { ProductType } from "../../ts/ProductsTypes";

import { addToCart } from "../../redux/cart/cartSlice";
import { toggleFavorite } from "../../redux/favorite/favoriteSlice";
import { useAppDispatch } from "../../hooks/redux";

import useSnackbar from "../../hooks/useSnackbar";
import Snackbar from "../common/Snackbar/Snackbar";
import Button from "../common/Button/Button";

import CardContent from "./CardContent/CardContent";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleOpen, handleClose } = useSnackbar();
  const { title, thumbnail, discountPercentage, rating, price, id } = product;

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const handleButtonClick = () => {
    dispatch(addToCart(product));
    handleOpen();
  };

  return (
    <Grid item xs={4} component="li" key={title}>
      <Card sx={{ pb: 2 }}>
        <Link component={RouterLink} to={`/product/${id}`}>
          <CardMedia
            component="img"
            image={thumbnail}
            sx={{ aspectRatio: "2/1" }}
            alt={title}
          />
        </Link>

        <CardContent
          title={title}
          discountPercentage={discountPercentage}
          rating={rating}
          price={price}
        />
        <CardActions>
          <Button size="medium" fullWidth onClick={handleButtonClick}>
            Add to cart
          </Button>
          <IconButton color="secondary" onClick={handleToggleFavorite}>
            <FavoriteBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Snackbar
        isOpen={isOpen}
        handleClose={handleClose}
        message="ADDED TO CART"
      />
    </Grid>
  );
};
export default React.memo(ProductCard);
