import React from "react";
import { Box } from "@mui/material";
import ProductParams from "../ProductParams/ProductParams";

type ProductDetailsProps = {
  details: {
    [key: string]: string | number;
  };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ details }) => {
  const keys = Object.keys(details);
  return (
    <Box display="flex" flexDirection="column">
      {keys.map((key) => (
        <ProductParams key={key} param={key} description={details[key]} />
      ))}
    </Box>
  );
};

export default React.memo(ProductDetails);
