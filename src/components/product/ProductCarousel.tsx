import React, { FC } from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

type ProductCarouselProps = {
  title: string;
  images: string[];
};

const ProductCarousel: FC<ProductCarouselProps> = ({ title, images }) => (
  <Carousel
    fullHeightHover={false}
    autoPlay={false}
    height={500}
    sx={{ width: "500px" }}
  >
    {images?.map((image: string, i: number) => (
      <Paper
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        elevation={3}
      >
        <img
          src={image}
          alt={title}
          style={{ aspectRatio: "1/1", width: "100%" }}
        />
      </Paper>
    ))}
  </Carousel>
);

export default ProductCarousel;
