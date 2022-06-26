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
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Product } from "../../interfaces/types";
import { addToCart } from "../../redux/cart/cartSlice";
import { useAppDispatch } from "../../hooks/redux";
import { StyledButton } from "./styles";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const { title, thumbnail, discountPercentage, rating, price, id } = product;
  return (
    <Grid item xs={4} component="li" key={title}>
      <Card sx={{ pb: 2 }}>
        <Link component={RouterLink} to={id}>
          <CardMedia
            component="img"
            image={thumbnail}
            sx={{ aspectRatio: "2/3" }}
            alt={title}
          />
        </Link>

        <CardContent>
          <Typography variant="h6" component="h6">
            {title.length > 15 ? `${title.slice(0, 15)}...` : title}
          </Typography>
          <Typography variant="subtitle1" paragraph gutterBottom>
            -{discountPercentage}%
          </Typography>
          <Typography variant="subtitle1" paragraph gutterBottom>
            ${price}
          </Typography>
          <Rating readOnly value={rating} precision={0.1} />
        </CardContent>
        <CardActions>
          <StyledButton
            size="large"
            fullWidth
            onClick={() => dispatch(addToCart(product))}
          >
            Добавить в корзину
          </StyledButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProductCard;
