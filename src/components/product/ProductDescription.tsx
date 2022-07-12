import { Box, Typography } from "@mui/material";
import React from "react";

const ProductDescription = ({ description }: { description: string }) => (
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
