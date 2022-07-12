import React, { FC } from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

type ProductCarouselProps = {
  title: string;
  images: string[];
};

const ProductCarousel: FC<ProductCarouselProps> = ({ title, images }) => (
  <Carousel fullHeightHover={false} autoPlay={false}>
    {images?.map((image: string, i: number) => (
      <Box
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        sx={{ maxWidth: "500px", height: "500px", margin: "0 auto" }}
      >
        <img src={image} alt={title} style={{ aspectRatio: "1/2" }} />
      </Box>
    ))}
  </Carousel>
);

export default ProductCarousel;
