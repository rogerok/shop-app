import React from "react";
import { ImgProps } from "../../../ts/types";
import { StyledImg } from "./Img.styles";

const Img: React.FC<ImgProps> = ({ src, alt, ...props }) => (
  <StyledImg src={src} alt={alt} {...props} />
);

export default Img;
