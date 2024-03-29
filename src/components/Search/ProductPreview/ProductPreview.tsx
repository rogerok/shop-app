import React from "react";
import { ListItem, Card, CardMedia, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { RoutesNames } from "../../../router/routes";
import { ProductType } from "../../../ts/ProductsTypes";

const ProductPreview: React.FC<ProductType> = (product) => {
  const { thumbnail, title, price, id } = product;
  const navigate = useNavigate();

  return (
    <ListItem
      key={id}
      sx={{ width: "100%" }}
      onClick={() => navigate(`/${RoutesNames.PRODUCT}/${id}`)}
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

export default ProductPreview;
