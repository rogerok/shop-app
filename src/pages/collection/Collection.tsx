import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Link,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { useParams, Link as RouterLink } from "react-router-dom";

import { useGetProductsByCategoryQuery } from "../../services/shopServices/shopApi";

const Collection = () => {
  const { category } = useParams();
  const { data } = useGetProductsByCategoryQuery(category!);
  console.log(data?.products);

  return (
    <Grid
      container
      /* spacing={0} */
      /*       sx={{ backgroundColor: "red" }} */
      component="section"
    >
      <Grid item xs={2} sx={{ backgroundColor: "green" }}>
        filters
      </Grid>
      <Grid item xs={10} component="article" pt={4} pb={4}>
        <Typography variant="h3" align="center">
          {category?.toUpperCase()}
        </Typography>
        <Container sx={{ marginTop: "2rem" }}>
          <Grid
            container
            spacing={2}
            component="ul"
            style={{ listStyleType: "none" }}
          >
            {data?.products.map((product) => (
              <Grid item component="li" key={product.title} xs={4}>
                <Card sx={{ pb: 2 }}>
                  <Link component={RouterLink} to={product.id}>
                    <CardMedia
                      component="img"
                      image={product.thumbnail}
                      sx={{ aspectRatio: "2/3" }}
                      alt={product.title}
                    />
                  </Link>

                  <CardContent>
                    <Typography variant="h6" component="h6">
                      {product.title}
                    </Typography>
                    <Typography variant="subtitle1" component="p" mb={1}>
                      -{product.discountPercentage}%
                    </Typography>
                    <Typography variant="subtitle1" component="p" mb={1}>
                      ${product.price}
                    </Typography>
                    <Rating readOnly value={product.rating} precision={0.1} />
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      sx={{
                        margin: "0 auto",
                        backgroundColor: "pink",
                      }}
                    >
                      Добавить в корзину
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Collection;
