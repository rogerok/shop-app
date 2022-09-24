import React, { useCallback } from "react";

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
import { toggleFavorite, selectFavorites } from "../../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import Button from "../common/Button/Button";
import CardContent from "./CardContent/CardContent";
import { setSnackbarOpen } from "../../redux/ui/uiSlice";

type ProductCardProps = {
  product: ProductType;
  isFavorite?: boolean;
};

type CardFooterProps = {
  handleButtonClick: () => void;
  handleToggleFavorite: () => void;
  isFavorite: boolean;
};

const CardFooter: React.FC<CardFooterProps> = ({
  handleButtonClick,
  handleToggleFavorite,
  isFavorite,
}) => (
  <CardActions>
    <Button size="medium" fullWidth onClick={handleButtonClick}>
      Add to cart
    </Button>
    <IconButton color="secondary" onClick={handleToggleFavorite}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  </CardActions>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite }) => {
  const dispatch = useAppDispatch();
  const { title, thumbnail, discountPercentage, rating, price, id } = product;

  const handleButtonClick = useCallback(() => {
    dispatch(addToCart(product));
    dispatch(setSnackbarOpen("added to cart"));
  }, []);

  const handleToggleFavorite = useCallback(() => {
    dispatch(toggleFavorite({ id, thumbnail }));
  }, []);

  return (
    <Grid item xs={4} component="li" key={title} sx={{ transiti: " all 0.3" }}>
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
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProductCard;
