import React from "react";
import { Box, Typography } from "@mui/material";

type ProductDescriptionProps = {
  description: string;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => (
  <Box sx={{ marginBottom: "auto" }}>
    <Typography variant="h4" fontWeight={600} gutterBottom>
      Description:
    </Typography>
    <Typography variant="h5" paragraph>
      {description}
    </Typography>
  </Box>
);

export default ProductDescription;
