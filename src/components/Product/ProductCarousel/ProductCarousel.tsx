import React, { FC } from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

interface ProductCarouselProps extends CarouselProps {
  title?: string;
  images: string[];
  maxWidth?: string;
}

const ProductCarousel: FC<ProductCarouselProps> = ({
  title,
  images,
  maxWidth = "500",
  autoPlay = false,
  height = 500,
  sx,
}) => (
  <Carousel
    autoPlay={autoPlay}
    height={height}
    sx={{ /* maxWidth: `${maxWidth}px`, */ ...sx }}
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
