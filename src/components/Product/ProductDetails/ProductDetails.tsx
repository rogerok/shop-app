import React, { FC } from "react";
import { Box, Divider, Typography } from "@mui/material";

type ProductDetailsProps = {
  stock: number;
  category: string;
  brand: string;
};

type DescriptionProps = {
  title: string;
  description: string | number;
};

const Detail: FC<DescriptionProps> = ({ title, description }) => {
  const capitalizeDetail = (toCapitalize: string | number) => {
    if (typeof toCapitalize === "number") return toCapitalize;
    return (
      toCapitalize.charAt(0).toLocaleUpperCase() +
      toCapitalize.slice(1).toLocaleLowerCase()
    );
  };

  return (
    <>
      <Box component="p" display="flex" justifyContent="space-between">
        <Typography component="span" variant="h5" fontWeight={600}>
          {title}:
        </Typography>
        <Typography component="span" variant="h5">
          {capitalizeDetail(description)}
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

const ProductDetails: FC<ProductDetailsProps> = ({
  stock,
  category,
  brand,
}) => (
  <Box display="flex" flexDirection="column">
    <Detail title="Brand" description={brand} />
    <Detail title="Stock" description={stock} />
    <Detail title="Category" description={category} />
  </Box>
);

export default ProductDetails;
