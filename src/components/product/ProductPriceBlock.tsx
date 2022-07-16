import React, { FC } from "react";
import { Paper, Typography } from "@mui/material";
import Button from "../common/Button/Button";

type ProductPriceBlockProps = {
  handleClick: () => void;
  price: number;
  discountPercentage: number;
};

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({
  price,
  discountPercentage,
  handleClick,
}) => (
  <Paper
    elevation={3}
    sx={{ display: "flex", flexDirection: "column", padding: 2 }}
  >
    <Typography
      variant="h4"
      sx={{
        color: "primary.main",
        textDecoration: "line-through",
        textDecorationThickness: "4px",
      }}
      gutterBottom
    >
      ${price}
    </Typography>
    <Typography variant="h4" sx={{ color: "error.main" }}>
      ${Number(((100 - Number(discountPercentage)) * price) / 100).toFixed(2)}
    </Typography>
    <Button
      size="large"
      onClick={handleClick}
      sx={{ margin: "0 auto" }}
      fullWidth
    >
      Add to cart
    </Button>
  </Paper>
);

export default ProductPriceBlock;
