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

const Description: FC<DescriptionProps> = ({ title, description }) => {
  const capitalizeDescription = (toCapitalize: string | number) => {
    if (typeof toCapitalize === "number") return toCapitalize;
    return (
      toCapitalize.charAt(0).toLocaleUpperCase() +
      toCapitalize.slice(1).toLocaleLowerCase()
    );
  };

  return (
    <>
      <Box
        component="p"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography component="span" variant="h5" fontWeight={600}>
          {title}:
        </Typography>
        <Typography component="span" variant="h5">
          {capitalizeDescription(description)}
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
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Description title="Brand" description={brand} />
    <Description title="Stock" description={stock} />
    <Description title="Category" description={category} />
  </Box>
);

export default ProductDetails;
