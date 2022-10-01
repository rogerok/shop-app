import React from "react";
import { Grid, Typography, Box, Rating, Link } from "@mui/material";

import { Link as RouterLink, useParams } from "react-router-dom";
import { RoutesNames } from "../../router/routes";
import { useAppDispatch } from "../../hooks/redux";
import { useGetProductByIdQuery } from "../../services/shopApi";
import { addToCart } from "../../store/cart/cartSlice";
import { setSnackbarOpen } from "../../store/ui/uiSlice";

import FullScreenLoader from "../common/FullScreenLoader/FullScreenLoader";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPriceBlock from "./ProductPriceblock/ProductPriceBlock";
import ProductDescription from "./ProductDescription/ProductDescription";

const Carousel = React.lazy(() => import("../common/Carousel/Carousel"));

const Product = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(productId!) ?? [];
  if (isLoading || !data) return <FullScreenLoader />;

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
  } = data;

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(addToCart(data));
    dispatch(setSnackbarOpen("added to cart"));
  };

  const details = {
    brand,
    category,
    stock,
  };

  return (
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
          <ProductDetails details={details} />
        </Grid>
        <Grid item xs={3}>
          <ProductPriceBlock
            discountPercentage={discountPercentage}
            handleClick={handleButtonClick}
            price={price}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
