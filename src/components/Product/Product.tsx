import React from "react";
import { Grid, Typography, Box, Rating, Link } from "@mui/material";

import { useParams, Link as RouterLink } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/shopServices/shopApi";
import { useAppDispatch } from "../../hooks/redux";
import useSnackbar from "../../hooks/useSnackbar";
import { addToCart } from "../../redux/cart/cartSlice";
import { RoutesNames } from "../../router/routes";

import Carousel from "../common/Carousel/Carousel";
import Snackbar from "../common/Snackbar/Snackbar";
import Backdrop from "../common/Backdrop/Backdrop";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPriceBlock from "./ProductPriceblock/ProductPriceBlock";
import ProductDescription from "./ProductDescription/ProductDescription";

const Product = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(productId!) ?? [];
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
  } = data! ?? [];

  const dispatch = useAppDispatch();
  const { isOpen, handleOpen, handleClose } = useSnackbar();
  const handleButtonClick = () => {
    dispatch(addToCart(data!));
    handleOpen();
  };
  return isLoading ? (
    <Backdrop />
  ) : (
    <Box component="section" p={4}>
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
          to={`/${RoutesNames.COLLECTION}/${category}`}
        >
          {category.toUpperCase()}
        </Link>
      </Typography>
      <Grid container spacing={4} mt={4} justifyContent="space-between">
        <Grid item xs={4}>
          <Carousel images={images} title={title} aspectRatio="1/1" />
        </Grid>
        <Grid
          item
          xs={5}
          component="article"
          display="flex"
          flexDirection="column"
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
      <Snackbar
        isOpen={isOpen}
        handleClose={handleClose}
        message="ADDED TO CART"
      />
    </Box>
  );
};

export default Product;
