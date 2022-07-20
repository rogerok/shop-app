import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useGetProductsForHomePageQuery } from "../../services/shopServices/shopApi";
import Backdrop from "../../components/common/Backdrop/Backdrop";
import { Product } from "../../ts/types";
import ProductCard from "../../components/ProductCard/ProductCard";

import image1 from "../../assets/home-page-carousel/1.jpg";
import image2 from "../../assets/home-page-carousel/2.jpg";
import image3 from "../../assets/home-page-carousel/3.jpg";
import image4 from "../../assets/home-page-carousel/4.jpg";
import image5 from "../../assets/home-page-carousel/5.jpg";
import Carousel from "../../components/common/Carousel/Carousel";

const carouselImages = [image1, image2, image3, image4, image5];

const HomePage = () => {
  const { data, isLoading } = useGetProductsForHomePageQuery(15);

  return isLoading ? (
    <Backdrop />
  ) : (
    <Grid container pt={10} pb={10} spacing={6} justifyContent="center">
      <Grid item xs={10}>
        <Paper
          elevation={3}
          sx={{
            backgroundImage: `linear-gradient(
    to right,
    rgb(203, 17, 171) 0px,
    rgb(72, 17, 115) 100%
  )`,
            pt: 2,
            pb: 2,
            mb: 2,
          }}
        >
          <Typography
            align="center"
            variant="h1"
            color="primary.light"
            gutterBottom
            sx={{ margin: "auto" }}
          >
            WELCOME TO CHERRYBERRIES
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={10}>
        <Carousel
          images={carouselImages}
          autoPlay
          imageAspectRatio="3/1.2"
          interval={2000}
        />
      </Grid>

      <Grid
        container
        item
        xs={12}
        spacing={4}
        component="ul"
        sx={{ listStyleType: "none", margin: "0 auto" }}
      >
        {data?.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default HomePage;
