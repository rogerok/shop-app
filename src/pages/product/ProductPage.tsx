import React, { Suspense } from "react";
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
import { ROUTES_PATHS } from "../../utils/routes-paths";
import { Product } from "../../ts/types";

import BasicSnackbar from "../../components/basic-snackbar/Snackbar";
import BasicBackdrop from "../../components/basic-backdrop/BasicBackdrop";
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
    <BasicBackdrop />
  ) : (
    <Box component="section" sx={{ padding: 4, margin: "0 auto" }}>
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
      <Grid container spacing={4} mt={4} justifyContent="space-between">
        <Grid item xs={3}>
          <ProductCarousel images={images} title={title} />
        </Grid>
        <Grid
          item
          xs={5}
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
