import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Box, Grid, Paper } from "@mui/material";

import { useGetProductsQuery } from "../../services/shopServices/shopApi";
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

import Pagination from "../common/Pagination/Pagination";
import { useAppSelector } from "../../hooks/redux";
import { selectSkippedProducts } from "../../redux/pagination/paginationSlice";
import Spinner from "../common/Spinner/Spinner";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const carouselImages = [image1, image2, image3, image4, image5];

const Home = () => {
  /*   const skippedProducts = useAppSelector(selectSkippedProducts);
  const { data, isLoading, isFetching } = useGetProductsQuery(skippedProducts); */
  const num = 0;
  const carouselRef = useRef<any>();
  return (
    <Grid container pt={10} pb={10} spacing={6} justifyContent="center">
      <Grid item xs={10}>
        <Label />
      </Grid>
      <Grid item xs={10} ref={carouselRef}>
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

        <ProductsGrid carouselRef={carouselRef} />
      </Grid>
      {/*       <Grid item xs={12} display="flex" justifyContent="center">
        <Pagination />
      </Grid> */}
    </Grid>
  );
};

export default Home;
