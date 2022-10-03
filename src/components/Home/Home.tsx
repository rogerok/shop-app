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
    <Grid container pt={10} pb={10} display="flex" justifyContent="center">
      <Grid item lg={10} md={10} sm={12} ref={scrollTo}>
        <Carousel images={carouselImages} height={370} indicators={false} />
      </Grid>

      <Grid
        container
        my={{ xl: 6, lg: 4, md: 2, sm: 2 }}
        component="ul"
        display="flex"
        justifyContent="center"
      >
        <ProductsGrid carouselRef={scrollTo} />
      </Grid>
    </Grid>
  );
};

export default Home;
