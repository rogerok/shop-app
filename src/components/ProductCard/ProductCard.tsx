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
import { useAppDispatch } from "../../hooks/redux";
import { setSnackbarOpen } from "../../store/ui/uiSlice";
import { addToCart } from "../../store/cart/cartSlice";
import { toggleFavorite } from "../../store/user/userSlice";
import { ProductType } from "../../ts/ProductsTypes";

import Button from "../common/Button/Button";
import CardContent from "./CardContent/CardContent";
import { DiscountLabel } from "./ProductCard.styles";

type ProductCardProps = {
  product: ProductType;
  isFavorite?: boolean;
};

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
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} component="li" key={title}>
      <Card sx={{ pb: 2 }}>
        <Link
          component={RouterLink}
          to={`/product/${id}`}
          sx={{ position: "relative" }}
        >
          <CardMedia
            component="img"
            image={thumbnail}
            sx={{ aspectRatio: "2/1" }}
            alt={title}
          />
          <DiscountLabel variant="h5" paragraph gutterBottom>
            -{discountPercentage}%
          </DiscountLabel>
        </Link>

        <CardContent title={title} rating={rating} price={price} />
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
