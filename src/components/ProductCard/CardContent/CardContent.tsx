import React from "react";
import {
  CardContent as MuiCardContent,
  Typography,
  Rating,
} from "@mui/material";
import { ProductType } from "../../../ts/types";
import { DiscountLabel } from "./CardContent.styles";

type CardContentProps = Pick<
  ProductType,
  "title" | "discountPercentage" | "price" | "rating"
>;

const CardContent: React.FC<CardContentProps> = ({
  title,
  discountPercentage,
  price,
  rating,
}) => (
  <MuiCardContent sx={{ position: "relative" }}>
    <Typography variant="h6" component="h6" gutterBottom>
      {title.length > 15 ? `${title.slice(0, 15)}...` : title}
    </Typography>
    <DiscountLabel variant="h5" paragraph gutterBottom>
      -{discountPercentage}%
    </DiscountLabel>
    <Typography variant="h5" paragraph gutterBottom>
      ${price}
    </Typography>
    <Rating readOnly value={rating} precision={0.1} />
  </MuiCardContent>
);
export default React.memo(CardContent);
