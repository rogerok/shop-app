import React from "react";
import { Grid, Typography, Rating } from "@mui/material";

import { useParams } from "react-router-dom";
import { RoutesNames } from "../../router/routes";
import { useAppDispatch } from "../../hooks/redux";
import { useGetProductByIdQuery } from "../../services/shopApi";
import { addToCart } from "../../store/cart/cartSlice";
import { setSnackbarOpen } from "../../store/ui/uiSlice";

import FullScreenLoader from "../common/FullScreenLoader/FullScreenLoader";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPriceBlock from "./ProductPriceblock/ProductPriceBlock";
import ProductDescription from "./ProductDescription/ProductDescription";
import CustomLink from "../common/CustomLink/CustomLink";

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
    <Grid container component="section" p={4}>
      <Grid item lg={12}>
        <Typography variant="h3" align="left" fontWeight={600} gutterBottom>
          {title.toUpperCase()}
        </Typography>
        <Rating
          readOnly
          value={Number(rating)}
          precision={0.1}
          sx={{ maginBottom: 4 }}
        />
        <Typography variant="body1" component="p">
          <CustomLink
            to={`/${RoutesNames.COLLECTION}/${category}`}
            sx={{ fontSize: "2rem" }}
          >
            {category.toUpperCase()}
          </CustomLink>
        </Typography>
      </Grid>
      <Grid
        container
        spacing={4}
        mt={4}
        justifyContent={{
          lg: "space-between",
          md: "center",
          sm: "center",
          xs: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={10} lg={4}>
          <Carousel images={images} title={title} aspectRatio="1/1" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          xl={5}
          lg={5}
          component="article"
          display="flex"
          flexDirection="column"
        >
          <ProductDescription description={description} />
          <ProductDetails details={details} />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={3} xl={3}>
          <ProductPriceBlock
            discountPercentage={discountPercentage}
            handleClick={handleButtonClick}
            price={price}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Product;
