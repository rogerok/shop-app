import React from "react";
import { Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { RoutesNames } from "../../../router/routes";
import { ProductType } from "../../../ts/types";
import { StyledCardMedia, StyledCardContent } from "./ListItemContent.styles";

type ListItemContentProps = Pick<ProductType, "id" | "thumbnail" | "title">;

const ListItemContent: React.FC<ListItemContentProps> = ({
  id,
  thumbnail,
  title,
}) => (
  <StyledCardContent>
    <Link
      to={`/${RoutesNames.PRODUCT}/${id}`}
      component={RouterLink}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StyledCardMedia component="img" image={thumbnail} />
      <Typography variant="h6" ml={2}>
        {title}
      </Typography>
    </Link>
  </StyledCardContent>
);

export default React.memo(ListItemContent);
