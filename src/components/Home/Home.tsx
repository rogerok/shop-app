import React, { useRef } from "react";
import { Grid } from "@mui/material";

import image1 from "../../assets/home-page-carousel/1.jpg";
import image2 from "../../assets/home-page-carousel/2.jpg";
import image3 from "../../assets/home-page-carousel/3.jpg";
import image4 from "../../assets/home-page-carousel/4.jpg";
import image5 from "../../assets/home-page-carousel/5.jpg";

import ProductsGrid from "./ProductsGrid/ProductsGrid";

const Carousel = React.lazy(() => import("../common/Carousel/Carousel"));

const carouselImages = [image1, image2, image3, image4, image5];

const Home = () => {
  const scrollTo = useRef<any>();
  return (
    <Grid
      container
      pt={10}
      pb={10}
      spacing={6}
      display="flex"
      justifyContent="center"
    >
      <Grid item xs={10} ref={scrollTo}>
        <Carousel images={carouselImages} height={370} indicators={false} />
      </Grid>

      <Grid
        container
        item
        my={6}
        component="ul"
        display="flex"
        justifyContent="center"
        margin="auto"
      >
        <ProductsGrid carouselRef={scrollTo} />
      </Grid>
    </Grid>
  );
};

export default Home;
