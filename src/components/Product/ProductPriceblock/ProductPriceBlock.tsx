import React, { FC, useMemo } from "react";
import { Paper, Typography } from "@mui/material";
import Button from "../../common/Button/Button";
import { countPriceWithDiscount } from "../../../utils/helpers/countPriceWithDiscount";

type ProductPriceBlockProps = {
  handleClick: () => void;
  price: number | string;
  discountPercentage: number | string;
};

const Price = React.memo(({ price }: { price: number | string }) => (
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
));

const PriceWithDiscount = React.memo(
  ({ priceWithDiscount }: { priceWithDiscount: number | string }) => (
    <Typography variant="h4" sx={{ color: "error.main" }}>
      ${priceWithDiscount}
    </Typography>
  )
);

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
      <Price price={price} />
      <PriceWithDiscount priceWithDiscount={priceWithDiscount} />
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

export default React.memo(ProductPriceBlock);
