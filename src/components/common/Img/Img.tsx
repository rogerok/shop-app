import React from "react";
import { ImgProps } from "../../../ts/types";
import { StyledImg } from "./Img.styles";

// Here i reassigned ImgProps to Props to avoid cycle dependency
/* type Props = ImgProps; */

const Img: React.FC<ImgProps> = ({ src, alt, ...props }) => (
  <StyledImg src={src} alt={alt} {...props} />
);

export default Img;
