import styled from "@emotion/styled";
import { ImgProps } from "../../../ts/types";

export const StyledImg = styled.img<ImgProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  aspect-ratio: ${(props) => (props.aspectRatio ? props.aspectRatio : "")};
`;
