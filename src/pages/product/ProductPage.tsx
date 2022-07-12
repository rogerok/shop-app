import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Rating,
  Link,
} from "@mui/material";

import { useParams, Link as RouterLink } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/shopServices/shopApi";
import { useAppDispatch } from "../../hooks/redux";
import useSnackbar from "../../hooks/useSnackbar";
import { addToCart } from "../../redux/cart/cartSlice";

import BasicButton from "../../components/basic-button/BasicButton";
import BasicSnackbar from "../../components/basic-snackbar/Snackbar";
import { SHOP_API } from "../../utils/api-consts";
import { ROUTES_PATHS } from "../../utils/routes-paths";
import { Product } from "../../ts/types";
import ProductDetails from "../../components/product/ProductDetails";
import ProductPriceBlock from "../../components/product/ProductPriceBlock";
import ProductCarousel from "../../components/product/ProductCarousel";
import ProductDescription from "../../components/product/ProductDescription";

const ProductPage = () => {
  const { productId } = useParams();
  const response = useGetProductByIdQuery(productId!);
  const {
    title,
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
  } = (response.data as Product) ?? [];

  const dispatch = useAppDispatch();
  const { isOpen, handleOpen, handleClose } = useSnackbar();
  const handleButtonClick = () => {
    dispatch(addToCart(response.data!));
    handleOpen();
  };
  return response.isLoading ? (
    <p>Is loading</p>
  ) : (
    <Box
      /*       item
      xs={10} */
      component="section"
      sx={{ padding: 4, margin: "0 auto" }}
    >
      <Typography variant="h3" align="left" gutterBottom>
        {title.toUpperCase()}
      </Typography>
      <Rating
        readOnly
        value={Number(rating)}
        precision={0.1}
        sx={{ maginBottom: 4 }}
      />
      <Typography variant="h5" component="p">
        <Link
          component={RouterLink}
          to={`/${ROUTES_PATHS.COLLECTION}/${category}`}
        >
          {category.toUpperCase()}
        </Link>
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={5}>
          <ProductCarousel images={images} title={title} />
        </Grid>
        <Grid
          item
          xs={4}
          component="article"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <ProductDescription description={description} />
          <ProductDetails brand={brand} category={category} stock={stock} />
        </Grid>
        <Grid item xs={3}>
          <ProductPriceBlock
            discountPercentage={discountPercentage}
            handleClick={handleButtonClick}
            price={price}
          />
        </Grid>
      </Grid>
      <BasicSnackbar
        isOpen={isOpen}
        handleClose={handleClose}
        message="ADDED TO CART"
      />
    </Box>
  );
};

export default ProductPage;
