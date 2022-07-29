import React, { FC } from "react";
import { Paper } from "@mui/material";
import MuiCarousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

interface ProductCarouselProps extends CarouselProps {
  title?: string;
  images: string[];
  maxWidth?: string;
}

const Carousel: FC<ProductCarouselProps> = ({
  title,
  images,
  autoPlay = false,
  sx,
  ...props
}) => (
  <MuiCarousel autoPlay={autoPlay} {...props}>
    {images?.map((image: string, i: number) => (
      <Paper
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        elevation={3}
        sx={{ display: "flex", justifyContent: "center", maxWidth: "100%" }}
      >
        <img src={image} alt={title} style={{ width: "100%" }} />
      </Paper>
    ))}
  </MuiCarousel>
);

export default Carousel;
