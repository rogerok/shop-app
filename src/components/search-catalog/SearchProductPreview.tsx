import React from "react";
import { ListItem, Card, CardMedia, Typography } from "@mui/material";
import { Product } from "../../interfaces/types";

const SearchProductPreview = (product: Product) => {
  const { thumbnail, title, price } = product;

  return (
    <ListItem sx={{ width: "100%" }}>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          image={thumbnail}
          sx={{ width: "80px", height: "80px", marginRight: "20px" }}
        />
        <Typography variant="h6" paragraph sx={{ marginRight: "auto" }}>
          {title}
        </Typography>
        <Typography variant="h6" paragraph>
          ${price}
        </Typography>
      </Card>
    </ListItem>
  );
};

export default SearchProductPreview;
