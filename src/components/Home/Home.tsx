import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

import { useGetProductsForHomePageQuery } from "../../services/shopServices/shopApi";
import { Product } from "../../ts/types";

import image1 from "../../assets/home-page-carousel/1.jpg";
import image2 from "../../assets/home-page-carousel/2.jpg";
import image3 from "../../assets/home-page-carousel/3.jpg";
import image4 from "../../assets/home-page-carousel/4.jpg";
import image5 from "../../assets/home-page-carousel/5.jpg";

import Backdrop from "../common/Backdrop/Backdrop";
import ProductCard from "../ProductCard/ProductCard";
import Label from "./Label/Ladel";
import Carousel from "../common/Carousel/Carousel";
import Button from "../common/Button/Button";
import Img from "../common/Img/Img";

const carouselImages = [image1, image2, image3, image4, image5];

const Home = () => {
  const [productsPerPage, setProductsPerPage] = useState(15);
  const { data, isLoading } = useGetProductsForHomePageQuery(productsPerPage);

  return isLoading ? (
    <Backdrop />
  ) : (
    <Grid container pt={10} pb={10} spacing={6} justifyContent="center">
      <Grid item xs={10}>
        <Label />
      </Grid>
      <Grid item xs={10}>
        <Carousel images={carouselImages} height={370} />
      </Grid>

      <Grid
        container
        item
        spacing={4}
        my={6}
        component="ul"
        sx={{ listStyleType: "none" }}
      >
        <Grid item xs={2} mr={6}>
          <Paper>filter</Paper>
        </Grid>

        <Grid container item xs={9} spacing={4}>
          {data?.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
          <Grid item xs={3} mx="auto">
            <Button
              onClick={() => setProductsPerPage((prev) => prev + 6)}
              sx={{ width: "100%", margin: "0 auto" }}
            >
              Load more
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
