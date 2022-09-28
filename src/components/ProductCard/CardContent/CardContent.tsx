import React from "react";
import {
  CardContent as MuiCardContent,
  Typography,
  Rating,
} from "@mui/material";
import { ProductType } from "../../../ts/ProductsTypes";

type CardContentProps = Pick<ProductType, "title" | "price" | "rating">;

const CardContent: React.FC<CardContentProps> = ({ title, price, rating }) => (
  <MuiCardContent sx={{ position: "relative" }}>
    <Typography variant="h6" component="h6" gutterBottom>
      {title.length > 15 ? `${title.slice(0, 15)}...` : title}
    </Typography>
    <Typography variant="h5" paragraph gutterBottom>
      ${price}
    </Typography>
    <Rating readOnly value={rating} precision={0.1} />
  </MuiCardContent>
);
export default React.memo(CardContent);
