import React, { FC } from "react";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  CardActions,
  Link,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { Product } from "../../ts/types";
import { addToCart } from "../../redux/cart/cartSlice";

import { useAppDispatch } from "../../hooks/redux";
import useSnackbar from "../../hooks/useSnackbar";

import Snackbar from "../common/Snackbar/Snackbar";
import Button from "../common/Button/Button";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleOpen, handleClose } = useSnackbar();
  const { title, thumbnail, discountPercentage, rating, price, id } = product;
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

        <CardContent sx={{ position: "relative" }}>
          <Typography variant="h6" component="h6" gutterBottom>
            {title.length > 15 ? `${title.slice(0, 15)}...` : title}
          </Typography>
          <Typography
            variant="h5"
            paragraph
            gutterBottom
            sx={{
              position: "absolute",
              bottom: "100%",
              padding: 0.5,
              backgroundColor: "secondary.dark",
              color: "primary.light",
              borderRadius: 4,
            }}
          >
            -{discountPercentage}%
          </Typography>
          <Typography variant="h5" paragraph gutterBottom>
            ${price}
          </Typography>
          <Rating readOnly value={rating} precision={0.1} />
        </CardContent>
        <CardActions>
          <Button size="large" fullWidth onClick={handleButtonClick}>
            Добавить в корзину
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        isOpen={isOpen}
        handleClose={handleClose}
        message="ДОБАВЛЕНО В КОРЗИНУ"
      />
    </Grid>
  );
};
export default ProductCard;
