import React from "react";
import { ListItem, Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../ts/types";

import { ROUTES_PATHS } from "../../../utils/routes-paths";

const SearchProductPreview = (product: Product) => {
  const { thumbnail, title, price, id } = product;
  const navigate = useNavigate();

  return (
    <ListItem
      key={id}
      sx={{ width: "100%" }}
      onClick={() => navigate(`/${ROUTES_PATHS.PRODUCT}/${id}`)}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          padding: 2,
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
