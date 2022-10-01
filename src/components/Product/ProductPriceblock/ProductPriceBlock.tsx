import React, { FC, useMemo } from "react";
import { Paper, Typography } from "@mui/material";

import { countPriceWithDiscount } from "../../../utils/helpers/countPriceWithDiscount";

import Button from "../../common/Button/Button";

type ProductPriceBlockProps = {
  handleClick: () => void;
  price: number | string;
  discountPercentage: number | string;
};

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({
  price,
  discountPercentage,
  handleClick,
}) => {
  const priceWithDiscount = useMemo(
    () => countPriceWithDiscount(price, discountPercentage),
    [price, discountPercentage]
  );

  return (
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
        ${priceWithDiscount}
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
};

export default ProductPriceBlock;
