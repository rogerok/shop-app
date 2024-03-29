import React from "react";
import { Paper } from "@mui/material";
import MuiCarousel from "react-material-ui-carousel";
import { CarouselProps as MuiCarouselProps } from "react-material-ui-carousel/dist/components/types";
import Img from "../Img/Img";

type CarouselProps = {
  title?: string;
  images: string[];
  maxWidth?: string;
  aspectRatio?: string;
  imageWidth?: string;
} & MuiCarouselProps;

const Carousel: React.FC<CarouselProps> = ({
  title,
  images,
  autoPlay = false,
  sx,
  aspectRatio,
  imageWidth,
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
        <Img
          src={image}
          alt={title!}
          aspectRatio={aspectRatio}
          width={imageWidth}
        />
      </Paper>
    ))}
  </MuiCarousel>
);

export default Carousel;
