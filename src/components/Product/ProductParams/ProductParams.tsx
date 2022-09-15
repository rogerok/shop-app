import { Box, Typography, Divider } from "@mui/material";
import React from "react";

type ProductParamsProps = {
  param: string;
  description?: string | number;
};

const ProductParams: React.FC<ProductParamsProps> = ({
  param,
  description,
}) => {
  const capitalizeDetail = (detail: string | number) => {
    if (typeof detail === "number") return detail;
    return (
      detail.charAt(0).toLocaleUpperCase() + detail.slice(1).toLocaleLowerCase()
    );
  };

  return (
    <>
      <Box component="p" display="flex" justifyContent="space-between">
        <Typography component="span" variant="h5" fontWeight={600}>
          {capitalizeDetail(param)}:
        </Typography>
        <Typography component="span" variant="h5">
          {description && capitalizeDetail(description)}
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export default React.memo(ProductParams);
